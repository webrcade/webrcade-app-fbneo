import {
  AppWrapper,
  Controller, 
  Controllers, 
  DefaultKeyCodeToControlMapping,
  DisplayLoop,
  FetchAppData,
  ScriptAudioProcessor,
  CIDS,
  LOG,  
  Unzip,
  Zip,
} from "@webrcade/app-common"

window.audioCallback = null;

export class Emulator extends AppWrapper {
  constructor(app, type, debug = false) {
    super(app, debug);

    window.emulator = this;
    this.type = type;
    this.fbneoModule = null;
    this.started = false;

    this.roms = [];
    this.files = [];
    this.samples = []
    this.archives = {};
    this.primaryName = "(not found)";

    this.aspectX = 4;
    this.aspectY = 3;
    this.width = 304;
    this.height = 224;
    this.rotated = false;
    this.flipped = false;
    this.pixelCount = this.width * this.height;
    this.vidBits = 32;
    this.refreshRate = 59.18;
    this.fsStateName = "";
    this.isNeoGeo = false;
  }

  TYPE_BIOS = 0;
  TYPE_PRIMARY = 1;
  TYPE_ADDITIONAL = 2;
  TYPE_SAMPLES = 3;

  FS_STATE_PREFIX = "/libsdl/fbneo/states/";
  FS_HS_PREFIX = "support/hiscores/";
  FS_MEMCARD_SAVE = "memorycard.fc";

  STATE_SAVE = "/state.fs";
  HS_SAVE = "/hs.hi";  
  MEMCARD_SAVE = "/memcard.fc";  

  setRoms(roms) {
    this.roms = roms;

    for (let i = 0; i < roms.length; i++) {
      const rom = roms[i];
      const name = rom.name;
      if (rom.type === this.TYPE_PRIMARY) {
        this.primaryName = name.split(".")[0];
        this.fsStateName = `${this.FS_STATE_PREFIX}${this.primaryName}.fs`;
        this.fsHsName = `${this.FS_HS_PREFIX}${this.primaryName}.hi`;        
      }
    }    
  }

  setSamples(samples) {
    this.samples = samples;
  }

  createControllers() {
    return new Controllers([
      new Controller(new DefaultKeyCodeToControlMapping()),
      new Controller(),
      new Controller(),
      new Controller()
    ]);
  }  

  createAudioProcessor() {
    const audioProcessor =  new ScriptAudioProcessor(2, 44100).setDebug(this.debug);
    // Check for volume adjust
    const adjust = this.getProps().volAdjust;
    if (adjust) {
      audioProcessor.adjustVolume(adjust);
    }
    return audioProcessor;
  }

  async onShowPauseMenu() {
    await this.saveState();
  }

  INP_LEFT =    1;
  INP_RIGHT =   1 << 1;
  INP_UP =      1 << 2;
  INP_DOWN =    1 << 3;
  INP_START =   1 << 4;
  INP_SELECT =  1 << 5;
  INP_B1 =      1 << 6;
  INP_B2 =      1 << 7;
  INP_B3 =      1 << 8;
  INP_B4 =      1 << 9;
  INP_B5 =      1 << 10;
  INP_B6 =      1 << 11;

  pollControls() {
    const { controllers, fbneoModule } = this;
    
    controllers.poll();

    const modern = false; // Modern control scheme
    for (let i = 0; i < 4; i++) {

      if (controllers.isControlDown(i, CIDS.ESCAPE)) {
        if (this.pause(true)) {
          controllers.waitUntilControlReleased(i, CIDS.ESCAPE)
            .then(() => this.showPauseMenu());
          return;
        }
      }

      let input = 0;
      if (controllers.isControlDown(i, CIDS.UP)) {
        input |= this.INP_UP;
      }
      else if (controllers.isControlDown(i, CIDS.DOWN)) {
        input |= this.INP_DOWN;
      }
      if (controllers.isControlDown(i, CIDS.RIGHT)) {
        input |= this.INP_RIGHT;
      }
      else if (controllers.isControlDown(i, CIDS.LEFT)) {      
        input |= this.INP_LEFT;
      }
      if (controllers.isControlDown(i, CIDS.SELECT)) {
        input |= this.INP_SELECT;
      }
      if (controllers.isControlDown(i, CIDS.START)) {
        input |= this.INP_START;
      }
      if (controllers.isControlDown(i, CIDS.A)) {
        input |= (modern ? this.INP_B2 : this.INP_B1);
      }
      if (controllers.isControlDown(i, CIDS.B)) {
        input |= (modern ? this.INP_B4: this.INP_B2);
      }
      if (controllers.isControlDown(i, CIDS.X)) {
        input |= (modern ? this.INP_B1 : this.INP_B3);
      }
      if (controllers.isControlDown(i, CIDS.Y)) {
        input |= (modern ? this.INP_B3 : this.INP_B4);
      }
      if (controllers.isControlDown(i, CIDS.LBUMP)) {
        input |= this.INP_B5;
      }
      if (controllers.isControlDown(i, CIDS.RBUMP)) {
        input |= this.INP_B6;
      }

      fbneoModule._setEmInput(i, input);
    }
  }
                             
  loadEmscriptenModule() {
    const { app, type } = this;

    return new Promise((resolve, reject) => {

      const script = document.createElement('script');
      document.body.appendChild(script);

      if (type === 'fbneo-neogeo') {
        this.isNeoGeo = true;
        script.src = 'js/fbneo-neogeo.js';
      } else if (type === 'fbneo-konami') {
        script.src = 'js/fbneo-konami.js';
      } else if (type === 'fbneo-capcom') {
        script.src = 'js/fbneo-capcom.js';
      } else {  
        script.src = 'js/fbneo-arcade.js';
      }
      script.async = false;      
      script.onerror = () => {
        reject("An error occurred attempting to load the FBNeo engine.");
      }
      script.onload = () => {
        if (window.fbneo) {          
          window.fbneo()
            .then(fbneoModule => {
              fbneoModule.onAbort = msg => app.exit(msg);
              fbneoModule.onExit = () => app.exit();  
              this.fbneoModule = fbneoModule;
              resolve();
            });
        } else {
          reject("An error occurred attempting to load the FBNeo engine.");
        }
      };
    });
  }

  async destroy() {
    console.log('destroy start')
    if (this.audioProcessor) {
      this.audioProcessor.pause(true);
    }
    console.log('destroy end')
  }

  async loadState() {
    const { app, debug, fbneoModule, fsHsName, fsStateName, 
      isNeoGeo, primaryName, storage, FS_MEMCARD_SAVE,
       HS_SAVE, MEMCARD_SAVE, STATE_SAVE} = this;
    const FS = fbneoModule.FS;      

    let path = null;
    let res = null;
    let s = null;

    try {        
      res = FS.analyzePath(fsStateName, true);
      if (!res.exists) {
        path = app.getStoragePath(`${primaryName}${STATE_SAVE}`);
        s = await storage.get(path);          
        if (s) {
          FS.writeFile(fsStateName, s);
        }
      }

      res = FS.analyzePath(fsHsName, true);
      if (!res.exists) {
        path = app.getStoragePath(`${primaryName}${HS_SAVE}`);
        s = await storage.get(path);          
        if (s) {
          FS.writeFile(fsHsName, s);
        }
      }

      if (isNeoGeo) {
        let u8array = null;
        res = FS.analyzePath(FS_MEMCARD_SAVE, true);        
        if (!res.exists) {
          path = app.getStoragePath(`${primaryName}${MEMCARD_SAVE}`);
          s = await storage.get(path);        
          if (s) {
            LOG.info("Memory card from storage.");
            // Retrieved from storage
            const uz = new Unzip().setDebug(debug);
            const blob = await uz.unzip(new Blob([s.buffer]), [], []);
            u8array = new Uint8Array(await new Response(blob).arrayBuffer());            
          } else {
            // Download new memory card
            LOG.info("New memory card.");
            u8array = await this.downloadFile("memorycard.zip");
          }
          if (u8array) {
            FS.writeFile(FS_MEMCARD_SAVE, u8array)
          }
        }
      }
    } catch(e) {
      LOG.error(e);
    }
  }

  async saveState() {    
    const { app, fbneoModule, fsHsName, fsStateName, isNeoGeo, 
      primaryName, storage, FS_MEMCARD_SAVE, HS_SAVE, MEMCARD_SAVE, 
      STATE_SAVE} = this;
    const FS = fbneoModule.FS;      
    
    if (!this.started) return;

    let found = false;
    let path = "";

    try {
      if (!fbneoModule._saveState(1)) {              

        let s = null;
        path = app.getStoragePath(`${primaryName}${STATE_SAVE}`);
        let res = FS.analyzePath(fsStateName, true);
        if (res.exists) {
          s = FS.readFile(fsStateName);              
          if (s) {          
            found = true;
            await this.saveStateToStorage(path, s, false);          
          }
        }         
        if (!s) {
          await storage.remove(path);
        } 

        s = null;
        path = app.getStoragePath(`${primaryName}${HS_SAVE}`);
        res = FS.analyzePath(fsHsName, true);
        if (res.exists) {
          s = FS.readFile(fsHsName);              
          if (s) {          
            found = true;
            await this.saveStateToStorage(path, s, false);          
          }
        }         
        if (!s) {
          await storage.remove(path);
        } 

        if (isNeoGeo) {
          // Save mem card state
          fbneoModule._memCardSave();

          s = null;
          path = app.getStoragePath(`${primaryName}${MEMCARD_SAVE}`);
          res = FS.analyzePath(FS_MEMCARD_SAVE, true);
          if (res.exists) {
            s = FS.readFile(FS_MEMCARD_SAVE);              
            if (s) {          
              found = true;
              const zip = new Zip();            
              const blob = await zip.zip(new Blob([s.buffer]), FS_MEMCARD_SAVE);
              await this.saveStateToStorage(path, 
                new Uint8Array(await new Response(blob).arrayBuffer()), 
                false);          
            }
          }         
          if (!s) {
            await storage.remove(path);
          } 
        }
                
        path = app.getStoragePath(`${primaryName}/sav`);
        if (found) {      
          await this.saveStateToStorage(path, null);
        } else {
          await storage.remove(path);
        }

        LOG.info("Saved: " + found);
      }
    } catch(e) {
      LOG.error(e);
    }
  }

  async downloadFile(file) {
    const { debug } = this
    const uz = new Unzip().setDebug(debug);
    const fad = new FetchAppData(file);
    const res = await fad.fetch();    
    let blob = await res.blob();
    blob = await uz.unzip(blob, [], []);
    return new Uint8Array(await new Response(blob).arrayBuffer());
  }

  async onStart(canvas) {
    const { app, debug, fbneoModule, isNeoGeo, primaryName, roms, samples } = this;

    try {
      // FS
      const FS = fbneoModule.FS;      

      // Set the canvas for the module
      fbneoModule.canvas = canvas; 

      // Create directories
      FS.mkdir("/libsdl");
      FS.mkdir("/libsdl/fbneo");
      FS.mkdir("/libsdl/fbneo/states");
      FS.mkdir("roms");
      FS.mkdir("support");
      FS.mkdir("support/hiscores");
      FS.mkdir("support/samples");      

      // Download, unzip, and copy high score file
      const u8array = await this.downloadFile("hiscore.zip");
      FS.writeFile("support/hiscores/hiscore.dat", u8array);
                
      // Load save state
      await this.loadState();

      // Make the roms directory and copy the files
      for (let i = 0; i < roms.length; i++) {
        const rom = roms[i];
        const name = rom.name;
        FS.writeFile("roms/" + name, rom.u8array);
      }

      // Make the samples directory and copy the files
      for (let i = 0; i < samples.length; i++) {
        const sample = samples[i];
        const name = sample.name;
        FS.writeFile("support/samples/" + name, sample.u8array);
      }

      if (isNeoGeo) {
        // BIOS
        const bios = this.getProps().bios;
        if (bios) {
          const b = parseInt(bios);
          if (b > 0) {
            fbneoModule._forceNeoGeoBios(b - 1);  
          }
        }

        // Force AES
        const forceAes = this.getProps().forceAesMode;
        if (forceAes && forceAes === true) {
          fbneoModule._setForceAes(1);
        }
      }

      const startMain = fbneoModule.cwrap('startMain', 'number', ['string']);
      if(startMain(primaryName) === 2) {
        app.exit("'" + primaryName + "' is not a recognized game."); 
      }

      // Insert memory card
      if (isNeoGeo) {
        fbneoModule._memCardInsert();
      }
      
      // Check archives
      if (this.debug) LOG.info(this.archives);
      let notFound = "";
      for (const [key, value] of Object.entries(this.archives)) {
        if (!value.found) {
          const name = key + ".zip"
          notFound += notFound.length > 0 ? ("\n" + name) : name;
        }
      }
      if (notFound.length > 0) {
        notFound = "The following ROM files are missing:\n\n" + notFound;
        throw new Error(notFound);
      }

      // Check files
      if (this.debug) LOG.info(this.files);
      notFound = "";
      for (let i = 0; i < this.files.length; i++) {
        const f = this.files[i];
        if (!f.found && f.essential) {
          const name = f.name + " (" + f.type + ")";
          notFound += notFound.length > 0 ? ("\n" + name) : name;
        }
      }
      if (notFound.length > 0) {
        notFound = "The following files are missing in ROM files:\n\n" + notFound;
        throw new Error(notFound);
      }

      // Display loop
      this.initVideo(canvas);
      this.displayLoop = new DisplayLoop(this.refreshRate, true, debug);

      // Start the audio processor
      this.audioProcessor.start();      

      // Mark that the loop is starting
      this.started = true;

      let audioArray = null;
      window.audioCallback = (offset, length) => {        
        audioArray = new Int16Array(fbneoModule.HEAP16.buffer, offset, 4096);
        this.audioProcessor.storeSoundCombinedInput(audioArray, 2, length, 0, 32768);
      }

      this.displayLoop.start(() => {        
        try {          
          fbneoModule._doLoop();
          this.pollControls();
        } catch (e) {
          app.exit(e);
        }
      });
    } catch(e) {
      LOG.error(e);
      app.exit(e);
    }
  }

  BRF_PRG = (1 << 20);
  BRF_GRA = (1 << 21);
  BRF_SND	= (1 << 22);
  BRF_ESS	= (1 << 24);
  BRF_BIOS = (1 << 25);
  BRF_SELECT = (1 << 26);
  BRF_OPT = (1 << 27);
  BRF_NODUMP = (1 << 28);

  addFile(file, type, loaded) {
    const { fbneoModule } = this;
    const essential = (type & this.BRF_ESS) ? true : false;
    let typeStr = "";
    if (type & this.BRF_BIOS)
      typeStr += " BIOS";
    if (type & this.BRF_PRG)
      typeStr += " program";
    if (type & this.BRF_GRA)
      typeStr += " graphics";
    if (type & this.BRF_SND)
      typeStr += " sound";
    typeStr += " ROM";
    typeStr = typeStr.trim();
    
    this.files.push({
      name: fbneoModule.UTF8ToString(file), 
      type: typeStr,
      found: loaded === 0 ? true : false,
      essential: essential
    });
  }

  addArchive(name, path, found) {
    const { fbneoModule } = this;
    name = fbneoModule.UTF8ToString(name);
    path = fbneoModule.UTF8ToString(path);

    const { archives } = this;
    let archive = archives[name];
    if (!archive) {
      archive = {
        found: found === 1 ? true : false,
        paths: [path]
      }
      archives[name] = archive;
    } else {
      if (!archive.found && found) {
        archive.found = true;
      }
      archive.paths.push(path);
    }
  }

  setRomProps(width, height, rotated, flipped, vidBits, refreshRate, aspectX, aspectY) {
    LOG.info(`Aspect ratio: ${aspectX}x${aspectY}`);
    this.aspectX = aspectX;
    this.aspectY = aspectY;
    this.rotated = rotated;
    this.flipped = flipped;
    this.width = width;
    this.height = height;
    this.pixelCount = width * height;
    this.vidBits = vidBits;
    this.refreshRate = refreshRate;
  }

  clearImageData(image, imageData, pixelCount) {
    for (var i = 0; i < (pixelCount * 4);) {
      imageData[i++] = 0;
      imageData[i++] = 0;
      imageData[i++] = 0;
      imageData[i++] = 0xFF;
    }
    this.context.putImageData(image, 0, 0);
  }  

  initVideo(canvas) {
    let { aspectX, aspectY, width, height, pixelCount } = this;

    canvas.width = width;
    canvas.height = height;    
    this.context = this.canvas.getContext("2d");
    this.image = this.context.getImageData(0, 0, width, height);
    this.imageData = this.image.data;
    this.clearImageData(this.image, this.imageData, pixelCount);

    const className = "canvas" + 
      (this.rotated ? "-rotated" : "") + 
      (this.flipped ? "-flipped" : "" )
    canvas.classList.add(className); 

    const xyAr = (aspectX/aspectY).toFixed(3);
    const yxAr = (aspectY/aspectX).toFixed(3);

    if (this.rotated) {
      canvas.style.setProperty("max-height", `calc(96vh*${yxAr})`, "important");
      canvas.style.setProperty("max-width", `calc(96vw*${xyAr})`, "important");
    } else {
      canvas.style.setProperty("max-width", `calc(96vh*${xyAr})`, "important");
      canvas.style.setProperty("max-height", `calc(96vw*${yxAr})`, "important");
    }    
  }

  drawScreen(buff) {
    const { fbneoModule, image, imageData, pixelCount, vidBits } = this;    
    if (vidBits === 16) {
      const b = new Uint8Array(fbneoModule.HEAP8.buffer, buff, pixelCount << 1);
      let index = 0;
      for (let i = 0; i < pixelCount; i++) {
        const offset = i << 1;
        const color = ((b[offset + 1] << 8) & 0xFF00) | (b[offset] & 0xFF); 
        imageData[index++] = ((color >> 11) & 0x1F) << 3;
        imageData[index++] = ((color >> 5) & 0x3F) << 2;
        imageData[index++] = (color & 0x1F) << 3;
        index++;
      }
    } else {
      const b = new Uint8Array(fbneoModule.HEAP8.buffer, buff, pixelCount << 2);
      let index = 0;
      for (let i = 0; i < pixelCount; i++) {
        const offset = i << 2;
        imageData[index++] = b[offset + 2];
        imageData[index++] = b[offset + 1];
        imageData[index++] = b[offset];            
        index++;
      }
    }
    this.context.putImageData(image, 0, 0);
  }
}
