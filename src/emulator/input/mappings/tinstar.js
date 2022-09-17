import { CIDS } from '@webrcade/app-common';

import { BaseMapping } from './base';

export class TinStarMapping extends BaseMapping {
  getName() {
    return 'tinstar';
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
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B1,
    };
  }

  getRemapList() {
    return [
      ['P1 Rightstick Up', 'switch 0x4202'],
      ['P1 Rightstick Down', 'switch 0x4203'],
      ['P1 Rightstick Left', 'switch 0x4200'],
      ['P1 Rightstick Right', 'switch 0x4201'],
      ['P2 Rightstick Up', 'switch 0x4302'],
      ['P2 Rightstick Down', 'switch 0x4303'],
      ['P2 Rightstick Left', 'switch 0x4300'],
      ['P2 Rightstick Right', 'switch 0x4301'],
    ];
  }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Coin 2', 'switch 0x07']
// 2: (2) ['Coin 3', 'switch 0x08']
// 3: (2) ['P1 Start', 'switch 0x02']
// 4: (2) ['P1 Leftstick Up', 'switch 0x4002']
// 5: (2) ['P1 Leftstick Down', 'switch 0x4003']
// 6: (2) ['P1 Leftstick Left', 'switch 0x4000']
// 7: (2) ['P1 Leftstick Right', 'switch 0x4001']
// 8: (2) ['P1 Rightstick Up', 'undefined']
// 9: (2) ['P1 Rightstick Down', 'undefined']
// 10: (2) ['P1 Rightstick Left', 'undefined']
// 11: (2) ['P1 Rightstick Right', 'undefined']
// 12: (2) ['P1 Button 1', 'switch 0x4080']
// 13: (2) ['P1 Button 2', 'switch 0x4081']
// 14: (2) ['P2 Start', 'switch 0x03']
// 15: (2) ['P2 Leftstick Up', 'switch 0x4102']
// 16: (2) ['P2 Leftstick Down', 'switch 0x4103']
// 17: (2) ['P2 Leftstick Left', 'switch 0x4100']
// 18: (2) ['P2 Leftstick Right', 'switch 0x4101']
// 19: (2) ['P2 Rightstick Up', 'undefined']
// 20: (2) ['P2 Rightstick Down', 'undefined']
// 21: (2) ['P2 Rightstick Left', 'undefined']
// 22: (2) ['P2 Rightstick Right', 'undefined']
// 23: (2) ['P2 Button 1', 'switch 0x4180']
// 24: (2) ['P2 Button 2', 'switch 0x4181']
// 25: (2) ['Reset', 'switch 0x3D']
// 26: (2) ['Tilt', 'switch 0x14']
// 27: (2) ['Dip A', 'constant 0x37']
// 28: (2) ['Dip B', 'constant 0x00']
// 29: (2) ['Dip C', 'constant 0xFD']
