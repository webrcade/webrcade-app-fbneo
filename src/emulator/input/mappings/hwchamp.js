import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, BaseMapping } from "./base";

export class HeavyweightChampMapping extends BaseMapping {

  getName() { return "hwchamp"; }


  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 1),
      new AnalogAdjustment(0, false, -1),
      new AnalogAdjustment(1, false, -1),
    ];
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

  // getAnalogModeDetectors() {
  //   const { emuInput } = this;
  //   return [
  //     new AnalogModeDetector(
  //       0, 'Left/Right',
  //       'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
  //       'joyaxis 0 0', 0, true
  //     )
  //   ];
  // }

  getRemapList() {
    return [
      ['Left/Right', 'joyaxis 0 0'],
      ["Left", "joyaxis 0 1"],
      ["Right", "joyaxis 0 3"],
    ];
  }

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Start 1', 'switch 0x02']
// 2: (2) ['Coin 2', 'switch 0x07']
// 3: (2) ['Start 2', 'switch 0x03']
// 4: (2) ['Left/Right', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 5: (2) ['Left', 'switch 0x4080']
// 6: (2) ['Right', 'switch 0x4081']
// 7: (2) ['Service', 'switch 0x0A']
// 8: (2) ['Diagnostics', 'switch 0x3C']
// 9: (2) ['Reset', 'switch 0x3D']
// 10: (2) ['Dip 1', 'constant 0xF9']
// 11: (2) ['Dip 2', 'constant 0xFF']
