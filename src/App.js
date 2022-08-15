import {
  blobToStr,
  md5,
  setMessageAnchorId,
  settings,
  FetchAppData,
  Resources,
  Unzip,
  UrlUtil,
  WebrcadeApp,
  LOG,
  TEXT_IDS,
} from '@webrcade/app-common';
import { Emulator } from './emulator';
import { NeoPauseScreen } from './pause';

import './App.scss';

class App extends WebrcadeApp {
  emulator = null;

  async fetchFiles(files) {
    const results = [];
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      const url = f.url;
      const type = f.type;
      if (this.debug) console.log('fetching: ' + url);
      try {
        const fad = new FetchAppData(url);
        const res = await fad.fetch();
        let blob = await res.blob();

        // Collect filenames from zip
        let filenames = {};
        const uz = new Unzip()
          .setDebug(this.isDebug())
          .setFailIfNotFound(false)
          .setEntriesCallback((e) => {
            for (let i = 0; i < e.length; i++) {
              const name = e[i].filename;
              filenames[name] = name;
            }
          });
        await uz.unzip(blob, [], []);

        // MD5
        const blobStr = await blobToStr(blob);
        const md5Hash = md5(blobStr);

        // Determine name
        let name = null;
        if (f.name) {
          name = f.name;
        } else {
          // name via url
          if (!name) {
            let fname = UrlUtil.getFileName(url);
            fname = fname.toLowerCase();
            if (fname.endsWith('.zip')) {
              name = fname;
            }
          }
          // via content disposition
          if (!name) {
            const headers = fad.getHeaders(res);
            // TODO: Move to common
            const disposition = headers['content-disposition'];
            if (disposition) {
              const matches = /.*filename="(.*)".*/gim.exec(disposition);
              if (matches.length > 1) {
                let match = matches[1];
                match = match.trim().toLowerCase();
                if (match.length > 0 && match.endsWith('.zip')) {
                  name = match;
                }
              }
            }
          }
          if (!name) {
            throw Error('Unknown ROM file (' + md5Hash + ').');
          }
        }

        // U8 array
        const arrayBuffer = await new Response(blob).arrayBuffer();
        const u8array = new Uint8Array(arrayBuffer);

        results.push({
          type: type,
          name: name,
          filenames: filenames,
          md5: md5Hash,
          u8array: u8array,
        });
      } catch (e) {
        throw Error(e + '\n' + url);
      }
    }

    return results;
  }

  componentDidMount() {
    super.componentDidMount();

    // Set anchor for messages
    setMessageAnchorId('canvas');

    const { appProps, ModeEnum } = this;

    try {
      const type = appProps.type;

      // Create the emulator
      if (this.emulator === null) {
        this.emulator = new Emulator(this, type, this.isDebug());
      }
      const emulator = this.emulator;

      const files = [];

      // Neo Geo bios
      if (type === 'fbneo-neogeo') {
        const bios = appProps.neogeo_bios;
        if (bios) {
          files.push({
            type: emulator.TYPE_BIOS,
            url: bios,
            name: 'neogeo.zip',
          });
        }
      }

      // Get the ROM location that was specified
      const rom = appProps.rom;
      if (!rom) throw new Error('A ROM file was not specified.');
      files.push({
        type: emulator.TYPE_PRIMARY,
        url: rom,
      });

      const additionalRoms = appProps.additionalRoms;
      if (additionalRoms) {
        additionalRoms.forEach((rom) => {
          files.push({
            type: emulator.TYPE_ADDITIONAL,
            url: rom,
          });
        });
      }

      const samples = appProps.samples;
      let samplesFile = [];
      if (samples) {
        samplesFile.push({
          type: emulator.TYPE_SAMPLES,
          url: samples,
        });
      }

      // Load Emscripten and ROMs
      emulator
        .loadEmscriptenModule()
        .then(() => settings.load())
        // .then(() => settings.setBilinearFilterEnabled(true))
        // .then(() => settings.setVsyncEnabled(false))
        .then(() => this.fetchFiles(files))
        .then((roms) => emulator.setRoms(roms))
        .then(() => this.fetchFiles(samplesFile))
        .then((s) => emulator.setSamples(s))
        .then(() => this.setState({ mode: ModeEnum.LOADED }))
        .catch((msg) => {
          LOG.error(msg);
          this.exit(
            msg ? msg : Resources.getText(TEXT_IDS.ERROR_RETRIEVING_GAME),
          );
        });
    } catch (e) {
      this.exit(e);
    }
  }

  async onPreExit() {
    try {
      await super.onPreExit();
      if (this.emulator) {
        if (!this.isExitFromPause()) {
          await this.emulator.saveState();
        }
        await this.emulator.destroy();
      }
    } catch (e) {
      LOG.error(e);
    }
  }

  componentDidUpdate() {
    const { mode } = this.state;
    const { canvas, emulator, ModeEnum } = this;

    if (mode === ModeEnum.LOADED) {
      window.focus();
      // Start the emulator
      emulator.start(canvas);
    }
  }

  renderPauseScreen() {
    const { appProps } = this;

    return (
      <NeoPauseScreen
        appProps={appProps}
        closeCallback={() => this.resume()}
        exitCallback={() => this.exitFromPause()}
        isEditor={this.isEditor}
        inputs={this.emulator.input.collectGamepadInfo()}
        keyInputs={this.emulator.input.collectKeyboardInfo()}
      />
    );
  }

  renderCanvas() {
    return (
      <canvas
        style={this.getCanvasStyles()}
        ref={(canvas) => {
          this.canvas = canvas;
        }}
        id="canvas"
      ></canvas>
    );
  }

  render() {
    const { mode } = this.state;
    const { ModeEnum } = this;

    return (
      <>
        {super.render()}
        {mode === ModeEnum.LOADING ? this.renderLoading() : null}
        {mode === ModeEnum.PAUSE ? this.renderPauseScreen() : null}
        {mode === ModeEnum.LOADED || mode === ModeEnum.PAUSE
          ? this.renderCanvas()
          : null}
      </>
    );
  }
}

export default App;
