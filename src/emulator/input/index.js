import {
  Controller,
  Controllers,
  KeyCodeToControlMapping,
  CIDS,
  KCODES,
  LOG,
} from "@webrcade/app-common"

import { findMapping } from "./mappings";

export default class EmulatorInput {

  INP_LEFT = 1;
  INP_RIGHT = 1 << 1;
  INP_UP = 1 << 2;
  INP_DOWN = 1 << 3;
  INP_START = 1 << 4;
  INP_SELECT = 1 << 5;
  INP_B1 = 1 << 6;
  INP_B2 = 1 << 7;
  INP_B3 = 1 << 8;
  INP_B4 = 1 << 9;
  INP_B5 = 1 << 10;
  INP_B6 = 1 << 11;

  K_INP_LEFT = 0x8000 | this.INP_LEFT;
  K_INP_RIGHT = 0x8000 | this.INP_RIGHT;
  K_INP_UP = 0x8000 |  this.INP_UP;
  K_INP_DOWN = 0x8000 |  this.INP_DOWN;
  K_INP_SELECT = 0x8000 | this.INP_SELECT;
  K_INP_START = 0x8000 | this.INP_START;
  K_INP_B1 = 0x8000 | this.INP_B1;
  K_INP_B2 = 0x8000 | this.INP_B2;
  K_INP_B3 = 0x8000 | this.INP_B3;
  K_INP_B4 = 0x8000 | this.INP_B4;
  K_INP_B5 = 0x8000 | this.INP_B5;
  K_INP_B6 = 0x8000 | this.INP_B6;

  KEYMAP_BASE = {
    [KCODES.SHIFT_RIGHT]: this.K_INP_SELECT,
    [KCODES.ENTER]: this.K_INP_START,
    [KCODES.ESCAPE]: CIDS.ESCAPE,
  }

  KEYMAP_BASE_WITH_DPAD = {
    ...this.KEYMAP_BASE,
    [KCODES.ARROW_UP]: CIDS.UP,
    [KCODES.ARROW_DOWN]: CIDS.DOWN,
    [KCODES.ARROW_RIGHT]: CIDS.RIGHT,
    [KCODES.ARROW_LEFT]: CIDS.LEFT,
  }

  FOUR_BUTTON_KEYMAP = {
    ...this.KEYMAP_BASE_WITH_DPAD,
    [KCODES.Z]: this.K_INP_B1,
    [KCODES.X]: this.K_INP_B2,
    [KCODES.C]: this.K_INP_B3,
    [KCODES.V]: this.K_INP_B4,
  }

  SIX_BUTTON_KEYMAP = {
    ...this.KEYMAP_BASE_WITH_DPAD,
    [KCODES.Z]: this.K_INP_B1,
    [KCODES.X]: this.K_INP_B2,
    [KCODES.C]: this.K_INP_B3,
    [KCODES.A]: this.K_INP_B4,
    [KCODES.S]: this.K_INP_B5,
    [KCODES.D]: this.K_INP_B6,
  }

  BUTTONMAP_BASE = {
    [CIDS.UP]: this.INP_UP,
    [CIDS.DOWN]: this.INP_DOWN,
    [CIDS.RIGHT]: this.INP_RIGHT,
    [CIDS.LEFT]: this.INP_LEFT,
    [CIDS.SELECT]: this.INP_SELECT,
    [CIDS.START]: this.INP_START,
  }

  BUTTONMAP = {
    ...this.BUTTONMAP_BASE,
    [CIDS.A]: this.INP_B1,
    [CIDS.B]: this.INP_B2,
    [CIDS.X]: this.INP_B3,
    [CIDS.Y]: this.INP_B4,
    [CIDS.LBUMP]: this.INP_B5,
    [CIDS.RBUMP]: this.INP_B6
  }

  BUTTONMAP_MODERN = {
    ...this.BUTTONMAP_BASE,
    [CIDS.A]: this.INP_B2,
    [CIDS.B]: this.INP_B4,
    [CIDS.X]: this.INP_B1,
    [CIDS.Y]: this.INP_B3,
    [CIDS.LBUMP]: this.INP_B5,
    [CIDS.RBUMP]: this.INP_B6
  }

  constructor(emulator) {
    this.emulator = emulator;   
    this.controllerCount = 4; 
  }

  inputs = [];
  keyMap = [];
  keyMapping = [];

  setGameInput(input) {
    const { fbneoModule } = this;
    const setInput = fbneoModule.cwrap('setGameInput', 'number', ['string', 'number']);
    const result = setInput(input, 1);
    LOG.info(input + " = " + result);
  }

  start() {
    const { controllerCount, inputs, keyMap, keyMapping } = this;
    this.fbneoModule = this.emulator.fbneoModule;  
       
    const customMapping = findMapping(this);
    this.customMapping = customMapping;

    if (customMapping) {
      LOG.info("Using custom mapping: " + customMapping.getName());
    }

    for (let i = 0; i < controllerCount; i++) {
      inputs.push(0);
    }

    //
    // Keyboard
    //
    
    let keyButtonMap = [
      (this.fbneoModule._getFireButtonCount() <= 4 ?
        this.FOUR_BUTTON_KEYMAP : this.SIX_BUTTON_KEYMAP)
    ];

    if (customMapping) {
      const m = customMapping.getKeyboardMap();
      if (m) {
        keyButtonMap = m;
      }
    }

    for (let i = 0; i < keyButtonMap.length; i++) {
      const m = keyButtonMap[i];
      keyMap.push(m);
      keyMapping.push(new KeyCodeToControlMapping(keyMap[i]));
    }

    // 
    // Buttons (Gamepads)
    //

    this.buttonMap = this.BUTTONMAP;
    if (customMapping) {
      let bmaps = customMapping.getButtonMap();
      if (bmaps) {
        this.buttonMap = bmaps;
      }
    }

    // 
    // Remap
    // 

    if (customMapping) {
      const remap = customMapping.getRemapList();
      if (remap) {
        for (let i = 0; i < remap.length; i++) {
          const m = remap[i];          
          this.setGameInput(`"${m[0]}" ${m[1]}`);
        }
      }
    }

    //
    // Analog to Dpad
    //
    this.analogToDpad = [];
    if (customMapping) {
      this.analogToDpad = customMapping.getAnalogToDpadMap();
    }

// TODO: Gamepad map (per controller)    

    this.emulator.setControllers(
      new Controllers([
        new Controller(keyMapping[0]),
        new Controller(keyMapping[1]),
        new Controller(keyMapping[2]),
        new Controller(keyMapping[3])
      ])
    );
  }

  getModule() {
    return this.fbneoModule;
  }  

  pollControls(controllers) {
    const { analogToDpad, controllerCount, customMapping, inputs,
      keyMap, keyMapping } = this;
    let key;

    controllers.poll();

    for (let i = 0; i < controllerCount; i++) {
      inputs[i] = 0;
    }
 
    for (let i = 0; i < controllerCount; i++) {

      if (controllers.isControlDown(i, CIDS.ESCAPE)) {
        if (this.emulator.pause(true)) {
          controllers.waitUntilControlReleased(i, CIDS.ESCAPE)
            .then(() => this.emulator.showPauseMenu());
          return;
        }
      }            

      //
      // Keyboard
      //

      if (keyMap.length > i) {        
        for (key in keyMap[i]) {
          const val = keyMap[i][key];
          if ((val & 0x8000) && keyMapping[i].isControlDown(val)) {
            inputs[i] |= (0x7FFF & val);
          }
        }    
      }

      //
      // Buttons
      //

      for (key in this.buttonMap) {
        if (controllers.isControlDown(i, parseInt(key))) {
          inputs[i] |= this.buttonMap[key];
        }
      } 

      //
      // Twin stick
      //
      
      if (customMapping) {
        if (analogToDpad.length > i) {
          const mapTo = analogToDpad[i];
          if (mapTo !== -1) {
            if (controllers.isAxisLeft(i, 1)) {
              inputs[mapTo] |= this.INP_LEFT;
            }
            if (controllers.isAxisRight(i, 1)) {
              inputs[mapTo] |= this.INP_RIGHT;
            }
            if (controllers.isAxisUp(i, 1)) {
              inputs[mapTo] |= this.INP_UP;
            }
            if (controllers.isAxisDown(i, 1)) {
              inputs[mapTo] |= this.INP_DOWN;
            }
          }          
        }
      }

      //
      // Analog
      //

      this.getModule()._setEmInput(i, inputs[i],
        this.getAxisValue(controllers, i, 0, true),
        this.getAxisValue(controllers, i, 0, false),
        this.getAxisValue(controllers, i, 1, true),
        this.getAxisValue(controllers, i, 1, false),
      );
    }
  }

  getAxisValue(controllers, index, a, b) {
    let val = controllers.getAxisValue(index, a, b);
    if (val > -.15 && val < .15) return 0;
    val = val > 0 ? (val - .15) : (val + .15);
    val = (val * (1 / .85)) * 0x8000;
    return val;
  }
}

//setGameInput("\"P1 Down\" switch 0xC8", 1);
//setGameInput("\"P1 Up\" switch 0xD0", 1);
  //  "P1 Dial"          slider 0xcb 0xcd speed 0x800 center 10
  //  "P1 Aim Analog"    slider 0xc8 0xd0 speed 0x800 center 10
//alert(setGameInput("\"P1 Dial\" joyaxis 0 2", 1));
// alert(setGameInput("\"P1 Aim Analog\" joyaxis 0 2", 1));
//alert(setGameInput("\"Steering\" joyaxis 0 0", 1));      
// alert(setGameInput("\"P1 Stick X\" joyaxis 0 0", 1));      
//alert(setGameInput("\"P1 Stick Y\" joyaxis 0 1", 1));     
//alert(setGameInput("\"Left/Right\" slider 0x4000 0x4001 speed 0x800 center 10", 1));     
