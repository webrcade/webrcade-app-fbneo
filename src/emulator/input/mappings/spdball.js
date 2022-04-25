import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, BaseMapping } from "./base";

export class SpeedBallMapping extends BaseMapping {

  getName() { return "spdball"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B1,
      [CIDS.RTRIG]: emuInput.INP_B1,
    }
  }  

  getAnalogAdjustments() { 
    return [
      new AnalogAdjustment(0, true, 2),
      new AnalogAdjustment(0, false, 2),
    ];  
  }

  getRemapList() {
    return [
      ["P1 Stick X", "joyaxis 0 2"],
      ["P1 Stick Y", "joyaxis 0 3"],
      ["P2 Stick X", "joyaxis 1 2"],
      ["P2 Stick Y", "joyaxis 1 3"],
    ]
  }
}


// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Up', 'switch 0x4002']
// 3: (2) ['P1 Down', 'switch 0x4003']
// 4: (2) ['P1 Left', 'switch 0x4000']
// 5: (2) ['P1 Right', 'switch 0x4001']
// 6: (2) ['P1 Button 1', 'switch 0x4080']
// 7: (2) ['P1 Stick X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 8: (2) ['P1 Stick Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 9: (2) ['P2 Coin', 'switch 0x07']
// 10: (2) ['P2 Start', 'switch 0x03']
// 11: (2) ['P2 Up', 'switch 0x4102']
// 12: (2) ['P2 Down', 'switch 0x4103']
// 13: (2) ['P2 Left', 'switch 0x4100']
// 14: (2) ['P2 Right', 'switch 0x4101']
// 15: (2) ['P2 Button 1', 'switch 0x4180']
// 16: (2) ['P2 Stick X', 'joyslider 0 0 speed 0x800 center 10']
// 17: (2) ['P2 Stick Y', 'joyslider 0 1 speed 0x800 center 10']
// 18: (2) ['Reset', 'switch 0x3D']
// 19: (2) ['Auto Up / Manual Down', 'switch 0x0A']
// 20: (2) ['Advance', 'switch 0x0B']
// 21: (2) ['High Score Reset', 'switch 0x0C']
// 22: (2) ['Tilt', 'switch 0x14']