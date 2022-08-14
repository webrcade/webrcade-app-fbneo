// import {
//   CIDS,
// } from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class GhoxMapping extends BaseMapping {
  getName() {
    return 'ghox';
  }

  // getButtonMap() {
  //   const { emuInput } = this;
  //   return {
  //     ...emuInput.BUTTONMAP_BASE,
  //     [CIDS.A]: emuInput.INP_B1,
  //     [CIDS.B]: emuInput.INP_B2,
  //     [CIDS.LBUMP]: emuInput.INP_B1,
  //     [CIDS.RBUMP]: emuInput.INP_B1,
  //     [CIDS.LTRIG]: emuInput.INP_B2,
  //     [CIDS.RTRIG]: emuInput.INP_B2,
  //   }
  // }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 1),
      new AnalogAdjustment(0, false, 0.5),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 Spinner X',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'P1 Spinner Y',
        'slider 0x4002 0x4003 speed 0x800 center 10',
        emuInput.INP_UP | emuInput.INP_DOWN,
        'joyaxis 0 1',
        0,
        false,
      ),
    ];
  }

  getRemapList() {
    return [
      ['P2 Spinner X', 'joyaxis 1 0'],
      ['P2 Spinner Y', 'joyaxis 1 1'],
      ['P1 Up', 'unknown'],
      ['P1 Down', 'unknown'],
      ['P1 Left', 'unknown'],
      ['P1 Right', 'unknown'],
      ['P2 Up', 'unknown'],
      ['P2 Down', 'unknown'],
      ['P2 Left', 'unknown'],
      ['P2 Right', 'unknown'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
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
// 8: (2) ['P1 Spinner X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 9: (2) ['P1 Spinner Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 10: (2) ['P2 Coin', 'switch 0x07']
// 11: (2) ['P2 Start', 'switch 0x03']
// 12: (2) ['P2 Up', 'switch 0x4102']
// 13: (2) ['P2 Down', 'switch 0x4103']
// 14: (2) ['P2 Left', 'switch 0x4100']
// 15: (2) ['P2 Right', 'switch 0x4101']
// 16: (2) ['P2 Button 1', 'switch 0x4180']
// 17: (2) ['P2 Button 2', 'switch 0x4181']
// 18: (2) ['P2 Spinner X', 'joyslider 0 0 speed 0x800 center 10']
// 19: (2) ['P2 Spinner Y', 'joyslider 0 1 speed 0x800 center 10']
// 20: (2) ['Reset', 'switch 0x3D']
// 21: (2) ['Service', 'switch 0x0A']
// 22: (2) ['Tilt', 'switch 0x14']
// 23: (2) ['Dip A', 'constant 0x00']
// 24: (2) ['Dip B', 'constant 0x00']
// 25: (2) ['Dip C', 'constant 0xF2']
