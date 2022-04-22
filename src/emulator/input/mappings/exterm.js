import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class ExterminatorMapping extends BaseMapping {

  getName() { return "exterm"; }

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
      new AnalogAdjustment(1, true, 1),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Spinner',
        'slider 0x4082 0x4083 speed 0x800 center 10', (emuInput.INP_B3 | emuInput.INP_B4),
        'joyaxis 0 2', 1, true
      )
    ];
  }

  getRemapList() {
    return [
      ["P2 Spinner", "joyaxis 1 2"],
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
// 7: (2) ['P1 Button 2', 'switch 0x4081']
// 8: (2) ['P1 Spinner', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 9: (2) ['P2 Coin', 'switch 0x07']
// 10: (2) ['P2 Start', 'switch 0x03']
// 11: (2) ['P2 Up', 'switch 0x4102']
// 12: (2) ['P2 Down', 'switch 0x4103']
// 13: (2) ['P2 Left', 'switch 0x4100']
// 14: (2) ['P2 Right', 'switch 0x4101']
// 15: (2) ['P2 Button 1', 'switch 0x4180']
// 16: (2) ['P2 Button 2', 'switch 0x4181']
// 17: (2) ['P2 Spinner', 'joyslider 0 0 speed 0x800 center 10']
// 18: (2) ['Reset', 'switch 0x3D']
// 19: (2) ['Dip A', 'constant 0xFF']
// 20: (2) ['Dip B', 'constant 0x01']