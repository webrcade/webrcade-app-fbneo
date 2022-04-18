import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class HydraMapping extends BaseMapping {

  getName() { return "hydra"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B4,
      [CIDS.LBUMP]: emuInput.INP_B5,
      [CIDS.RBUMP]: emuInput.INP_B2,
      [CIDS.LTRIG]: emuInput.INP_B6,
      [CIDS.RTRIG]: emuInput.INP_B3,
    }
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, .5),
      new AnalogAdjustment(0, false, .5),
    ];
  }    

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Stick X',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
      new AnalogModeDetector(
        0, 'P1 Stick Y',
        'slider 0x4002 0x4003 speed 0x800 center 10', (emuInput.INP_UP | emuInput.INP_DOWN),
        'joyaxis 0 1', 0, false
      )
    ];
  }

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Coin 2', 'switch 0x07']
// 2: (2) ['Coin 3', 'switch 0x08']
// 3: (2) ['P1 Stick X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['P1 Stick Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 5: (2) ['P1 Accelerator', 'switch 0x4080']
// 6: (2) ['P1 Right Trigger', 'switch 0x4081']
// 7: (2) ['P1 Right Thumb', 'switch 0x4082']
// 8: (2) ['P1 Left Trigger', 'switch 0x4084']
// 9: (2) ['P1 Left Thumb', 'switch 0x4085']
// 10: (2) ['P1 Boost', 'switch 0x4083']
// 11: (2) ['Reset', 'switch 0x3D']
// 12: (2) ['Dip A', 'constant 0x40']