// import {
//   CIDS,
// } from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class MobilSuitGundamFinalShootingMapping extends BaseMapping {
  getName() {
    return 'gdfs';
  }

  // getButtonMap() {
  //   const { emuInput } = this;
  //   return {
  //     ...emuInput.BUTTONMAP_BASE,
  //     [CIDS.A]: emuInput.INP_B1,
  //     [CIDS.LBUMP]: emuInput.INP_B1,
  //     [CIDS.RBUMP]: emuInput.INP_B1,
  //     [CIDS.LTRIG]: emuInput.INP_B1,
  //     [CIDS.RTRIG]: emuInput.INP_B1,
  //   }
  // }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 2),
      new AnalogAdjustment(0, false, 2),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 Gun X',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'P1 Gun Y',
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
      ['P2 Gun X', 'joyaxis 1 0'],
      ['P2 Gun Y', 'joyaxis 1 1'],
      ['Dip A', 'constant 0xFE'],
      ['Dip B', 'constant 0xF7'],
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
// 8: (2) ['P1 Button 3', 'switch 0x4082']
// 9: (2) ['P1 Gun X', 'mouseaxis 0']
// 10: (2) ['P1 Gun Y', 'mouseaxis 1']
// 11: (2) ['P2 Coin', 'switch 0x07']
// 12: (2) ['P2 Start', 'switch 0x03']
// 13: (2) ['P2 Up', 'switch 0x4102']
// 14: (2) ['P2 Down', 'switch 0x4103']
// 15: (2) ['P2 Left', 'switch 0x4100']
// 16: (2) ['P2 Right', 'switch 0x4101']
// 17: (2) ['P2 Button 1', 'switch 0x4180']
// 18: (2) ['P2 Button 2', 'switch 0x4181']
// 19: (2) ['P2 Button 3', 'switch 0x4182']
// 20: (2) ['P2 Gun X', 'joyslider 0 0 speed 0x800 center 10']
// 21: (2) ['P2 Gun Y', 'joyslider 0 1 speed 0x800 center 10']
// 22: (2) ['Reset', 'switch 0x3D']
// 23: (2) ['Service', 'switch 0x0A']
// 24: (2) ['Tilt', 'switch 0x14']
// 25: (2) ['Dip A', 'constant 0xFF']
// 26: (2) ['Dip B', 'constant 0xF7']
