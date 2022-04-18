import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class BadlandsMapping extends BaseMapping {

  getName() { return "badlands"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B1,
    }
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 1),
    ];
  }  

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Steering',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      )
    ];
  }
  
  getRemapList() {
    return [
      ['P2 Steering', "joyaxis 1 0"],
    ];
  }

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Pedal', 'switch 0x4080']
// 2: (2) ['P1 Start / Fire', 'switch 0x4081']
// 3: (2) ['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['P2 Coin', 'switch 0x07']
// 5: (2) ['P2 Pedal', 'switch 0x4180']
// 6: (2) ['P2 Start / Fire', 'switch 0x4181']
// 7: (2) ['P2 Steering', 'joyslider 0 0 speed 0x800 center 10']
// 8: (2) ['Reset', 'switch 0x3D']
// 9: (2) ['Freeze (Service)', 'switch 0x0A']
// 10: (2) ['Dip A', 'constant 0x80']