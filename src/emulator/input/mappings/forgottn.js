import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, BaseMapping } from "./base";

export class ForgottenWorldsMapping extends BaseMapping {

  getName() { return "forgottn"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B1,
      [CIDS.RTRIG]: emuInput.INP_B1,
    }
  }  

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(1, false, -2),
    ];
  }

  getRemapList() {
    return [
      ["P1 Turn (analog)", "joyaxis 0 3"],
      ["P2 Turn (analog)", "joyaxis 1 3"],
    ];
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Up', 'switch 0x4002']
// 3: (2) ['P1 Down', 'switch 0x4003']
// 4: (2) ['P1 Left', 'switch 0x4000']
// 5: (2) ['P1 Right', 'switch 0x4001']
// 6: (2) ['P1 Attack', 'switch 0x4080']
// 7: (2) ['P1 Turn (analog)', 'slider 0x2f 0x21 speed 0x800 center 10']
// 8: (2) ['P1 Turn - (digital)', 'switch 0x4081']
// 9: (2) ['P1 Turn + (digital)', 'switch 0x4082']
// 10: (2) ['P2 Coin', 'switch 0x07']
// 11: (2) ['P2 Start', 'switch 0x03']
// 12: (2) ['P2 Up', 'switch 0x4102']
// 13: (2) ['P2 Down', 'switch 0x4103']
// 14: (2) ['P2 Left', 'switch 0x4100']
// 15: (2) ['P2 Right', 'switch 0x4101']
// 16: (2) ['P2 Attack', 'switch 0x4180']
// 17: (2) ['P2 Turn (analog)', 'joyslider 0 2 speed 0x800 center 10']
// 18: (2) ['P2 Turn - (digital)', 'switch 0x4181']
// 19: (2) ['P2 Turn + (digital)', 'switch 0x4182']
// 20: (2) ['Reset', 'switch 0x3D']
// 21: (2) ['Service', 'switch 0x0A']
// 22: (2) ['Dip A', 'constant 0x00']
// 23: (2) ['Dip B', 'constant 0x03']
// 24: (2) ['Dip C', 'constant 0x00']
// 25: (2) ['Dip D', 'constant 0x00']