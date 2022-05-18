import {
  CIDS,
} from "@webrcade/app-common"

import { BaseMapping } from "./base";

export class MadPlanetsMapping extends BaseMapping {

  getName() { return "mplanets"; }

  getAnalogToDpadMap() {
    return [2];
  }

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

  getRemapList() {
    return [
      ["Rotate Left", "switch 0x4200"],
      ["Rotate Right", "switch 0x4201"],
    ];
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Up', 'switch 0x4002']
// 3: (2) ['P1 Down', 'switch 0x4003']
// 4: (2) ['P1 Left', 'switch 0x4000']
// 5: (2) ['P1 Right', 'switch 0x4001']
// 6: (2) ['P1 Button 1', 'switch 0x4080']
// 7: (2) ['P1 Button 2', 'switch 0x4081']
// 8: (2) ['Rotate Left', 'undefined']
// 9: (2) ['Rotate Right', 'undefined']
// 10: (2) ['Reset', 'switch 0x3D']
// 11: (2) ['Select', 'switch 0x3C']
// 12: (2) ['Dip A', 'constant 0x00']
// 13: (2) ['Dip B', 'constant 0x80']