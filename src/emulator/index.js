import {
  AppWrapper,
  Controller, 
  Controllers, 
  DefaultKeyCodeToControlMapping,
  DisplayLoop,
  ScriptAudioProcessor,
  CIDS,
  LOG  
} from "@webrcade/app-common"

import NEOGEO_HASHES from './neogeo-lookup.json';

window.audioCallback = null;

export class Emulator extends AppWrapper {
  constructor(app, debug = false) {
    super(app, debug);

    window.emulator = this;
    this.fbneoModule = null;
    this.started = false;

    this.roms = [];
    this.files = [];
    this.archives = {};

    this.width = 304;
    this.height = 224;
    this.pixelCount = this.width * this.height;
    this.refreshRate = 59.18;
  }

  TYPE_BIOS = 0;
  TYPE_PRIMARY = 1;
  TYPE_OTHER = 2;

  setRoms(roms) {
    this.roms = roms;
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
    return new ScriptAudioProcessor(2, 44100).setDebug(this.debug);
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
        input |= modern ? this.INP_B2 : this.INP_B1;
      }
      if (controllers.isControlDown(i, CIDS.B)) {
        input |= modern ? this.INP_B4: this.INP_B2;
      }
      if (controllers.isControlDown(i, CIDS.X)) {
        input |= modern ? this.INP_B1 : this.INP_B3;
      }
      if (controllers.isControlDown(i, CIDS.Y)) {
        input |= modern ? this.INP_B3 : this.INP_B4;
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
    const { app } = this;

    return new Promise((resolve, reject) => {

      const script = document.createElement('script');
      document.body.appendChild(script);

      script.src = 'js/fbneo.js';
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
  }

  async saveState() {    
  }

  async onStart(canvas) {
    const { app, debug, fbneoModule, refreshRate, roms } = this;

    try {
      // FS
      const FS = fbneoModule.FS;      

      // Set the canvas for the module
      fbneoModule.canvas = canvas; 
                
      // Load save state
      await this.loadState();

      // Make the roms directory and copy the files
      FS.mkdir("roms");
      let primaryName = "(not found)";
      for (let i = 0; i < roms.length; i++) {
        const rom = roms[i];
        const name = rom.name;
        FS.writeFile("roms/" + name, rom.u8array);
        if (rom.type === this.TYPE_PRIMARY) {
          primaryName = name.split(".")[0];
        }
      }

      // TODO: Force 60
      //fbneoModule._forceNeoGeoBios(19);
      //fbneoModule._setForceAes(1);

      const startMain = fbneoModule.cwrap('startMain', 'number', ['string']);
      if(startMain(primaryName) === 2) {
        app.exit("'" + primaryName + "' is not a recognized game."); 
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
      this.displayLoop = new DisplayLoop(60, true, debug);

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

  getNameForHash(md5) {
    return NEOGEO_HASHES[md5];
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

  setRomProps(width, height, refreshRate) {
    this.width = width;
    this.height = height;
    this.pixelCount = width * height;
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
    const { width, height, pixelCount } = this;

    canvas.width = width;
    canvas.height = height;    
    this.context = this.canvas.getContext("2d");
    this.image = this.context.getImageData(0, 0, width, height);
    this.imageData = this.image.data;
    this.clearImageData(this.image, this.imageData, pixelCount);
  }

  drawScreen(buff) {
    const { fbneoModule, image, imageData, pixelCount } = this;    
    const b = new Uint8Array(fbneoModule.HEAP8.buffer, buff, pixelCount << 2);
    let index = 0;
    for (let i = 0; i < pixelCount; i++) {
      const offset = i << 2;
      imageData[index++] = b[offset + 2];
      imageData[index++] = b[offset + 1];
      imageData[index++] = b[offset];            
      index++;
    }
    this.context.putImageData(image, 0, 0);
  }
}
