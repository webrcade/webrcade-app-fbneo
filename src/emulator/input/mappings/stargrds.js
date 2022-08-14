import { CIDS } from '@webrcade/app-common';

import { BaseMapping } from './base';

export class StarGuardsMapping extends BaseMapping {
  getName() {
    return 'stargrds';
  }

  getAnalogToDpadMap() {
    return [2, 3];
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_START,
      [CIDS.LBUMP]: emuInput.INP_START,
      [CIDS.RBUMP]: emuInput.INP_START,
      [CIDS.LTRIG]: emuInput.INP_START,
      [CIDS.RTRIG]: emuInput.INP_START,
    };
  }

  getRemapList() {
    return [
      ['P1 Right Stick Up', 'switch 0x4202'],
      ['P1 Right Stick Down', 'switch 0x4203'],
      ['P1 Right Stick Left', 'switch 0x4200'],
      ['P1 Right Stick Right', 'switch 0x4201'],
      ['P2 Right Stick Up', 'switch 0x4302'],
      ['P2 Right Stick Down', 'switch 0x4303'],
      ['P2 Right Stick Left', 'switch 0x4300'],
      ['P2 Right Stick Right', 'switch 0x4301'],
    ];
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start / Weapon', 'switch 0x02']
// 2: (2) ['P1 Left Stick Up', 'switch 0x4002']
// 3: (2) ['P1 Left Stick Down', 'switch 0x4003']
// 4: (2) ['P1 Left Stick Left', 'switch 0x4000']
// 5: (2) ['P1 Left Stick Right', 'switch 0x4001']
// 6: (2) ['P1 Right Stick Up', 'undefined']
// 7: (2) ['P1 Right Stick Down', 'undefined']
// 8: (2) ['P1 Right Stick Left', 'undefined']
// 9: (2) ['P1 Right Stick Right', 'undefined']
// 10: (2) ['P2 Coin', 'switch 0x07']
// 11: (2) ['P2 Start / Weapon', 'switch 0x03']
// 12: (2) ['P2 Left Stick Up', 'switch 0x4102']
// 13: (2) ['P2 Left Stick Down', 'switch 0x4103']
// 14: (2) ['P2 Left Stick Left', 'switch 0x4100']
// 15: (2) ['P2 Left Stick Right', 'switch 0x4101']
// 16: (2) ['P2 Right Stick Up', 'undefined']
// 17: (2) ['P2 Right Stick Down', 'undefined']
// 18: (2) ['P2 Right Stick Left', 'undefined']
// 19: (2) ['P2 Right Stick Right', 'undefined']
// 20: (2) ['P3 Coin', 'switch 0x08']
// 21: (2) ['P3 Start / Weapon', 'switch 0x04']
// 22: (2) ['P3 Left Stick Up', 'switch 0x4202']
// 23: (2) ['P3 Left Stick Down', 'switch 0x4203']
// 24: (2) ['P3 Left Stick Left', 'switch 0x4200']
// 25: (2) ['P3 Left Stick Right', 'switch 0x4201']
// 26: (2) ['P3 Right Stick Up', 'undefined']
// 27: (2) ['P3 Right Stick Down', 'undefined']
// 28: (2) ['P3 Right Stick Left', 'undefined']
// 29: (2) ['P3 Right Stick Right', 'undefined']
// 30: (2) ['Reset', 'switch 0x3D']
// 31: (2) ['Service', 'switch 0x0A']
// 32: (2) ['Tilt', 'switch 0x14']
// 33: (2) ['Dip A', 'constant 0xFF']
// 34: (2) ['Dip B', 'constant 0xFF']
// 35: (2) ['Dip C', 'constant 0xFF']
// 36: (2) ['Dip D', 'constant 0xFF']
// 37: (2) ['Dip E', 'constant 0xFF']
// 38: (2) ['Dip F', 'constant 0x80']
