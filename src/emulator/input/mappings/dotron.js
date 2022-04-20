import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, BaseMapping } from "./base";

export class DiscsOfTronMapping extends BaseMapping {

  getName() { return "dotron"; }

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
      new AnalogAdjustment(1, true, .5),
      new AnalogAdjustment(1, false, .5),
    ];  
  }

  getRemapList() {
    return [
      ["P1 Dial", "joyaxis 0 2"],
      ["P1 Aim Analog", "joyaxis 0 3"],
    ]
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Up', 'switch 0x4002']
// 3: (2) ['P1 Down', 'switch 0x4003']
// 4: (2) ['P1 Left', 'switch 0x4000']
// 5: (2) ['P1 Right', 'switch 0x4001']
// 6: (2) ['P1 Dial', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 7: (2) ['P1 Aim Analog', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 8: (2) ['P1 Button 1', 'switch 0x4080']
// 9: (2) ['P1 Button 2', 'switch 0x4081']
// 10: (2) ['P1 Aim Down', 'switch 0x4082']
// 11: (2) ['P1 Aim Up', 'switch 0x4083']
// 12: (2) ['P2 Coin', 'switch 0x07']
// 13: (2) ['P2 Start', 'switch 0x03']
// 14: (2) ['Reset', 'switch 0x3D']
// 15: (2) ['Service', 'switch 0x0A']
// 16: (2) ['Tilt', 'switch 0x14']
// 17: (2) ['Dip A', 'constant 0x80']
// 18: (2) ['Dip B', 'constant 0xFF']
// 19: (2) ['Dip C', 'constant 0x80']
