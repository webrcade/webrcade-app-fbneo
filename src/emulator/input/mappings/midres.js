import {
  CIDS,
} from "@webrcade/app-common"

import { BaseMapping } from "./base";

export class MidnightResistanceMapping extends BaseMapping {

  getName() { return "midres"; }

  getAnalogToDpadMap() {
    return [2, 3];
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.Y]: emuInput.INP_B4,
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B1,
    }
  }

  getRemapList() {
    return [
      ["P1 Rotate Left", "switch 0x4202"],
      ["P1 Rotate Right", "switch 0x4203"],
      ["P2 Rotate Left", "switch 0x4302"],
      ["P2 Rotate Right", "switch 0x4303"],
    ];
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Up', 'switch 0x4002']
// 3: (2) ['P1 Down', 'switch 0x4003']
// 4: (2) ['P1 Left', 'switch 0x4000']
// 5: (2) ['P1 Right', 'switch 0x4001']
// 6: (2) ['P1 Fire 1', 'switch 0x4080']
// 7: (2) ['P1 Fire 2', 'switch 0x4081']
// 8: (2) ['P1 Fire 3', 'switch 0x4082']
// 9: (2) ['P1 Fire 4 (Rotate)', 'switch 0x4083']
// 10: (2) ['P1 Rotate Left', 'undefined']
// 11: (2) ['P1 Rotate Right', 'undefined']
// 12: (2) ['P2 Coin', 'switch 0x07']
// 13: (2) ['P2 Start', 'switch 0x03']
// 14: (2) ['P2 Up (Cocktail)', 'switch 0x4102']
// 15: (2) ['P2 Down (Cocktail)', 'switch 0x4103']
// 16: (2) ['P2 Left (Cocktail)', 'switch 0x4100']
// 17: (2) ['P2 Right (Cocktail)', 'switch 0x4101']
// 18: (2) ['P2 Fire 1 (Cocktail)', 'switch 0x4180']
// 19: (2) ['P2 Fire 2 (Cocktail)', 'switch 0x4181']
// 20: (2) ['P2 Fire 3 (Cocktail)', 'switch 0x4182']
// 21: (2) ['P2 Fire 4 (Rotate)', 'switch 0x4183']
// 22: (2) ['P2 Rotate Left', 'undefined']
// 23: (2) ['P2 Rotate Right', 'undefined']
// 24: (2) ['Reset', 'switch 0x3D']
// 25: (2) ['Service', 'switch 0x0A']
// 26: (2) ['Dip 1', 'constant 0xFF']
// 27: (2) ['Dip 2', 'constant 0xBF']