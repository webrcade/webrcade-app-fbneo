import { CIDS } from '@webrcade/app-common';

import { BaseMapping } from './base';

export class Tnk3Mapping extends BaseMapping {
  getName() {
    return 'tnk3';
  }

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
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B1,
    };
  }

  getRemapList() {
    return [
      ['P1 Rotate Left', 'switch 0x4200'],
      ['P1 Rotate Right', 'switch 0x4201'],
      ['P2 Rotate Left', 'switch 0x4300'],
      ['P2 Rotate Right', 'switch 0x4301'],
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
// 8: (2) ['P1 Rotate Left', 'undefined']
// 9: (2) ['P1 Rotate Right', 'undefined']
// 10: (2) ['P1 Button 3 (rotate)', 'switch 0x4082']
// 11: (2) ['P2 Start', 'switch 0x03']
// 12: (2) ['P2 Up', 'switch 0x4102']
// 13: (2) ['P2 Down', 'switch 0x4103']
// 14: (2) ['P2 Left', 'switch 0x4100']
// 15: (2) ['P2 Right', 'switch 0x4101']
// 16: (2) ['P2 Button 1', 'switch 0x4180']
// 17: (2) ['P2 Button 2', 'switch 0x4181']
// 18: (2) ['P2 Rotate Left', 'undefined']
// 19: (2) ['P2 Rotate Right', 'undefined']
// 20: (2) ['P2 Button 3 (rotate)', 'switch 0x4182']
// 21: (2) ['Reset', 'switch 0x3D']
// 22: (2) ['Service', 'switch 0x0A']
// 23: (2) ['Dip A', 'constant 0x3D']
// 24: (2) ['Dip B', 'constant 0x34']
// 25: (2) ['Dip C', 'constant 0xC1']
