import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, BaseMapping } from './base';

export class PopNBounceMapping extends BaseMapping {
  getName() {
    return 'popbounc';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B4,
    };
  }

  getAnalogAdjustments() {
    return [new AnalogAdjustment(1, true, 0.75)];
  }

  getRemapList() {
    return [
      ['P1 Paddle', 'joyaxis 0 2'],
      ['P2 Paddle', 'joyaxis 1 2'],
      ['P1 Button D', 'switch 0x4083'],
    ];
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Select', 'switch 0x04']
// 3: (2) ['P1 Up', 'switch 0x4002']
// 4: (2) ['P1 Down', 'switch 0x4003']
// 5: (2) ['P1 Left', 'switch 0x4000']
// 6: (2) ['P1 Right', 'switch 0x4001']
// 7: (2) ['P1 Button A', 'switch 0x4080']
// 8: (2) ['P1 Button B', 'switch 0x4081']
// 9: (2) ['P1 Button C', 'switch 0x4082']
// 10: (2) ['P1 Button D', 'switch 0x8080']
// 11: (2) ['P1 Paddle', 'mouseaxis 0']
// 12: (2) ['P2 Coin', 'switch 0x07']
// 13: (2) ['P2 Start', 'switch 0x03']
// 14: (2) ['P2 Select', 'switch 0x05']
// 15: (2) ['P2 Up', 'switch 0x4102']
// 16: (2) ['P2 Down', 'switch 0x4103']
// 17: (2) ['P2 Left', 'switch 0x4100']
// 18: (2) ['P2 Right', 'switch 0x4101']
// 19: (2) ['P2 Button A', 'switch 0x4180']
// 20: (2) ['P2 Button B', 'switch 0x4181']
// 21: (2) ['P2 Button C', 'switch 0x4182']
// 22: (2) ['P2 Button D', 'switch 0x4183']
// 23: (2) ['P2 Paddle', 'joyslider 0 0 speed 0x800 center 10']
// 24: (2) ['Reset', 'switch 0x3D']
// 25: (2) ['Test', 'switch 0x3C']
// 26: (2) ['Service', 'switch 0x0A']
// 27: (2) ['Dip 1', 'constant 0x00']
// 28: (2) ['Dip 2', 'constant 0x00']
// 29: (2) ['System', 'constant 0x80']
// 30: (2) ['Slots', 'constant 0x01']
// 31: (2) ['Debug Dip 1', 'constant 0x00']
// 32: (2) ['Debug Dip 2', 'constant 0x00']
