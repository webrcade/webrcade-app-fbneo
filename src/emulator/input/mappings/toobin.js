import {
  CIDS,
} from "@webrcade/app-common"

import { BaseMapping } from "./base";

export class ToobinMapping extends BaseMapping {

  getName() { return "toobin"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B1,
      [CIDS.Y]: emuInput.INP_B1,
      [CIDS.X]: emuInput.INP_B1,
      [CIDS.LBUMP]: emuInput.INP_B3,
      [CIDS.RBUMP]: emuInput.INP_B2,
      [CIDS.LTRIG]: emuInput.INP_B4,
      [CIDS.RTRIG]: emuInput.INP_B5,
    }
  }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Coin 2', 'switch 0x07']
// 2: (2) ['Coin 3', 'switch 0x08']
// 3: (2) ['P1 Throw', 'switch 0x4080']
// 4: (2) ['P1 Right Paddle Forward', 'switch 0x4081']
// 5: (2) ['P1 Left Paddle Forward', 'switch 0x4082']
// 6: (2) ['P1 Left Paddle Backward', 'switch 0x4083']
// 7: (2) ['P1 Right Paddle Backward', 'switch 0x4084']
// 8: (2) ['P2 Throw', 'switch 0x4180']
// 9: (2) ['P2 Right Paddle Forward', 'switch 0x4181']
// 10: (2) ['P2 Left Paddle Forward', 'switch 0x4182']
// 11: (2) ['P2 Left Paddle Backward', 'switch 0x4183']
// 12: (2) ['P2 Right Paddle Backward', 'switch 0x4184']
// 13: (2) ['Reset', 'switch 0x3D']
// 14: (2) ['Dip A', 'constant 0x10']