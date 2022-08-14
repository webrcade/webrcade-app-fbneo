import { CIDS } from '@webrcade/app-common';

import { BaseMapping } from './base';

export class ScrewLooseMapping extends BaseMapping {
  getName() {
    return 'screwloo';
  }

  getAnalogToDpadMap() {
    return [1];
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
      ['Right Stick Up', 'switch 0x4102'],
      ['Right Stick Down', 'switch 0x4103'],
      ['Right Stick Left', 'switch 0x4100'],
      ['Right Stick Right', 'switch 0x4101'],
    ];
  }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Coin 2', 'switch 0x07']
// 2: (2) ['Left Stick Up', 'switch 0x4002']
// 3: (2) ['Left Stick Down', 'switch 0x4003']
// 4: (2) ['Left Stick Left', 'switch 0x4000']
// 5: (2) ['Left Stick Right', 'switch 0x4001']
// 6: (2) ['Right Stick Up', 'undefined']
// 7: (2) ['Right Stick Down', 'undefined']
// 8: (2) ['Right Stick Left', 'undefined']
// 9: (2) ['Right Stick Right', 'undefined']
// 10: (2) ['Button 1', 'switch 0x4080']
// 11: (2) ['Button 2', 'switch 0x4081']
// 12: (2) ['Reset', 'switch 0x3D']
// 13: (2) ['Select', 'switch 0x3C']
// 14: (2) ['Dip A', 'constant 0x40']
// 15: (2) ['Dip B', 'constant 0x01']
