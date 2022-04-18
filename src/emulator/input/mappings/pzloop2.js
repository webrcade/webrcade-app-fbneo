import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, BaseMapping } from "./base";

export class PuzzLoop2Mapping extends BaseMapping {

  getName() { return "pzloop2"; }

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
      new AnalogAdjustment(1, true, 1),
    ];
  }

  getRemapList() {
    return [
      ["P1 Paddle", "joyaxis 0 2"],
      ["P2 Paddle", "joyaxis 1 2"],
    ];
  }
}


// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Up', 'switch 0x4002']
// 3: (2) ['P1 Down', 'switch 0x4003']
// 4: (2) ['P1 Left', 'switch 0x4000']
// 5: (2) ['P1 Right', 'switch 0x4001']
// 6: (2) ['P1 Shot', 'switch 0x4080']
// 7: (2) ['P1 Paddle', 'mouseaxis 0']
// 8: (2) ['P2 Coin', 'switch 0x07']
// 9: (2) ['P2 Start', 'switch 0x03']
// 10: (2) ['P2 Up', 'switch 0x4102']
// 11: (2) ['P2 Down', 'switch 0x4103']
// 12: (2) ['P2 Left', 'switch 0x4100']
// 13: (2) ['P2 Right', 'switch 0x4101']
// 14: (2) ['P2 Shot', 'switch 0x4180']
// 15: (2) ['P2 Paddle', 'joyslider 0 2 speed 0x800 center 10']
// 16: (2) ['Reset', 'switch 0x3D']
// 17: (2) ['Diagnostic', 'switch 0x3C']
// 18: (2) ['Service', 'switch 0x0A']
// 19: (2) ['Volume Up', 'switch 0x4081']
// 20: (2) ['Volume Down', 'switch 0x4082']