import {
  Controller,
  Controllers,
  KeyCodeToControlMapping,
  CIDS,
  KCODES,
  LOG,
} from "@webrcade/app-common"

import { findMapping } from "./mappings";
import { AnalogAdjustment } from "./mappings/base";

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
    this.debug = emulator.debug;
    this.emulator = emulator;   
    this.controllerCount = 4; 
  }

  inputs = [];
  keyMap = [];
  keyMapping = [];
  analogToDpad = [];
  analogModeDetectors = [];
  analogAdjustments = [
    new AnalogAdjustment(0, true),
    new AnalogAdjustment(0, false),
    new AnalogAdjustment(1, true),
    new AnalogAdjustment(1, false),
  ];
  isAnalogDpadEnabled = true;

  setGameInput(input) {
    const { fbneoModule } = this;
    const setInput = fbneoModule.cwrap('setGameInput', 'number', ['string', 'number']);
    const result = setInput(input, 1);
    if (this.debug) {
      LOG.info(input + " = " + result);
    }
  }

  start() {
    const { analogAdjustments, controllerCount, inputs, keyMap, keyMapping } = this;
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

    if (customMapping) {
      this.analogToDpad = customMapping.getAnalogToDpadMap();
    }

    //
    // Analog adjustments
    //
    if (customMapping) {
      const adjustments = customMapping.getAnalogAdjustments();
      for (let idx = 0; idx < adjustments.length; idx++) {
        const adjustment = adjustments[idx];
        if (this.debug) {
          LOG.info(adjustment)
        }
        if (adjustment.getStick() === 0 && adjustment.isX()) {
          analogAdjustments[0] = adjustment;
        } else if (adjustment.getStick() === 0 && !adjustment.isX()) {
          analogAdjustments[1] = adjustment;
        } else if (adjustment.getStick() === 1 && adjustment.isX()) {
          analogAdjustments[2] = adjustment;
        } else if (adjustment.getStick() === 1 && !adjustment.isX()) {
          analogAdjustments[3] = adjustment;
        }
      }
    }

    //
    // Analog mode detectors
    //
    if (customMapping) {
      this.isAnalogDpadEnabled = customMapping.isAnalogDpadEnabled();
      this.analogModeDetectors = customMapping.getAnalogModeDetectors();      
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

    console.log("\n\n### Gamepad mapping:\n\n");
    this.dumpInfo();
    console.log("\n\n");
  }

  getModule() {
    return this.fbneoModule;
  }  

  pollControls(controllers) {
    const { analogAdjustments, analogModeDetectors, analogToDpad, controllerCount, 
      customMapping, inputs, isAnalogDpadEnabled, keyMap, keyMapping } = this;
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
        if (controllers.isControlDown(i, parseInt(key), isAnalogDpadEnabled)) {
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

      const analog0x = analogAdjustments[0].getValue(controllers, i);
      const analog0y = analogAdjustments[1].getValue(controllers, i);
      const analog1x = analogAdjustments[2].getValue(controllers, i);
      const analog1y = analogAdjustments[3].getValue(controllers, i);

      this.getModule()._setEmInput(i, inputs[i],
        analog0x, analog0y, analog1x, analog1y
      );

      for (let idx = 0; idx < analogModeDetectors.length; idx++) {
        const detector = analogModeDetectors[idx];        
        if (detector.getPlayerIndex() === i) {
          const stickIndex = detector.getAnalogStickIndex();
          const isX = detector.isAnalogX();
          let analogValue = 0;
          if (stickIndex === 0 && isX) {
            analogValue = analog0x;
          } else if (stickIndex === 0 && !isX) {
            analogValue = analog0y;
          } else if (stickIndex === 1 && isX) {
            analogValue = analog1x;
          } else if (stickIndex === 1 && !isX) {
            analogValue = analog1y;
          }  
          detector.check(this, inputs[i], analogValue);
        }
      }
    }
  }

  dumpInfo() {
    const { buttonMap } = this;
    //console.log(this.buttonMap);    

    const inputs = this.emulator.collectGameInputs();

    const aLeft0 = this.findAnalogInput(inputs, 0, 0);
    if (aLeft0) {
      console.log("Left Analog (x-axis) = " + this.stripPlayer(aLeft0));
    }
    const aLeft1 = this.findAnalogInput(inputs, 0, 1);
    if (aLeft1) {
      console.log("Left Analog (y-axis) = " + this.stripPlayer(aLeft1));
    }
    const aRight0 = this.findAnalogInput(inputs, 0, 2);
    if (aRight0) {
      console.log("Right Analog (x-axis) = " + this.stripPlayer(aRight0));
    }
    const aRight1 = this.findAnalogInput(inputs, 0, 3);
    if (aRight1) {
      console.log("Right Analog (y-axis) = " + this.stripPlayer(aRight1));
    }

    // Only player 1 for now
    for (var p = 0; p < 1; p++) {
      const dir = [];

      for (const b in buttonMap) {
        const bInt = parseInt(b);
        const v = buttonMap[b];
        const name = this.getButtonName(bInt);
        const mapped = this.findSwitchInput(inputs, this.getButtonValue(v, p));
        if (mapped) {
          if (bInt === CIDS.LEFT || bInt === CIDS.RIGHT || 
            bInt === CIDS.UP || bInt === CIDS.DOWN) {
            dir.push(this.stripPlayer(mapped));
          } else {
            console.log(name + " = " + this.stripPlayer(mapped));
          }
        }
      }

      if (dir.length > 0) {
        let control = "Dpad";
        if (this.isAnalogDpadEnabled) {
          control += " or Left Analog";
        }

        console.log(control + " = " + dir.join(", "));
      }

      // Check for analog to dpad
      if (this.analogToDpad) {
        try {
          const dpad = this.analogToDpad[p];
          const vals = [];
          if (dpad && dpad >= 0) {
            const up = this.findSwitchInput(
              inputs, this.getButtonValue(this.INP_UP, dpad));
            if (up) vals.push(this.stripPlayer(up));
            const down = this.findSwitchInput(
              inputs, this.getButtonValue(this.INP_DOWN, dpad));            
            if (down) vals.push(this.stripPlayer(down));
            const left = this.findSwitchInput(
              inputs, this.getButtonValue(this.INP_LEFT, dpad));            
            if (left) vals.push(this.stripPlayer(left));
            const right = this.findSwitchInput(
              inputs, this.getButtonValue(this.INP_RIGHT, dpad));
            if (right) vals.push(this.stripPlayer(right));
            if (vals.length > 0) {
              console.log("Right Analog = " + vals.join(", "));
            }
          }
        } catch (e) {
          // Ignore for now.
        }

      }
    }    
  }

  stripPlayer(str) {
    if (str.startsWith("P")) {
      return str.substring(3);
    }
    return str;
  }

  findAnalogInput(inputs, controller, axis) {
    // Search in analog mode detectors
    for (let i = 0; i < this.analogModeDetectors.length; i++) {
      const amd = this.analogModeDetectors[i];
      const aString = amd.getAnalogString().trim();
      try {
        const parts = aString.split(" ");
        const pc = parseInt(parts[1]);
        const pa = parseInt(parts[2]);
        if (pc === controller && pa === axis) {
          return amd.getControlString();
        }
      } catch (e) {
        // Ignore for now.
      }
    }   

    // Search in inputs
    for (let i = 0; i < inputs.length; i++) {
      const inp = inputs[i];
      const vstr = inp[1].trim();
      if (vstr.startsWith("joyaxis")) {
        const parts = vstr.split(" ");
        try {
          const pc = parseInt(parts[1]);
          const pa = parseInt(parts[2]);
          if (pc === controller && pa === axis) {
            return inp[0];
          }
        } catch (e) {
          // Ignore for now.
        }
      }
    }  

    return null;     
  }

  findSwitchInput(inputs, value) {
    for (let i = 0; i < inputs.length; i++) {
      const inp = inputs[i];
      const vstr = inp[1].trim();
      if (vstr.startsWith("switch")) {
        const parts = vstr.split(" ");
        if (parts.length > 1) {
          try {
            if (parseInt(parts[1]) === value) {
              return inp[0];
            }
          } catch (e) {
            // Ignore for now.
          }
        }
      }
    }  
    return null;  
  }

  getButtonName(buttonId) {
    switch(buttonId) {
      case CIDS.UP: return "Up";
      case CIDS.DOWN: return "Down";
      case CIDS.LEFT: return "Left";
      case CIDS.RIGHT: return "Right";
      case CIDS.A: return "A";
      case CIDS.B: return "B";
      case CIDS.X: return "X";
      case CIDS.Y: return "Y";
      case CIDS.LBUMP: return "Left Bumper";
      case CIDS.RBUMP: return "Right Bumper";
      case CIDS.LTRIG: return "Left Trigger";
      case CIDS.RTRIG: return "Right Trigger";
      case CIDS.SELECT: return "Select";
      case CIDS.START: return "Start";
      case CIDS.LANALOG: return "Left Analog";
      case CIDS.RANALOG: return "Right Analog";
      case CIDS.ESCAPE: return "Escape"
      default: break;
    }
    return "(Unknown)";
  }

  getButtonValue(v, player) {
    let bv = 0;
    switch(v) {
      case this.INP_LEFT: 
        bv = (0x4000 + (player * 0x100));
        break;
      case this.INP_RIGHT: 
        bv = (0x4001 + (player * 0x100));
        break;
      case this.INP_UP: 
        bv = (0x4002 + (player * 0x100));
        break;
      case this.INP_DOWN: 
        bv = (0x4003 + (player * 0x100));
        break;
      case this.INP_START: 
        bv = 0x02 + player;
        break;
      case this.INP_SELECT: 
        bv = 0x06 + player;
        break;
      case this.INP_B1: 
        bv = (0x4080 + (player * 0x100));
        break;
      case this.INP_B2: 
        bv = (0x4081 + (player * 0x100));
        break;
      case this.INP_B3: 
        bv = (0x4082 + (player * 0x100));
        break;
      case this.INP_B4: 
        bv = (0x4083 + (player * 0x100));
        break;
      case this.INP_B5: 
        bv = (0x4084 + (player * 0x100));
        break;
      case this.INP_B6: 
        bv = (0x4085 + (player * 0x100));
        break;
      default: break;
    }
    return bv;
  }
}
