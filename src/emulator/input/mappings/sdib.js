import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, BaseMapping } from './base';

export class SdiMapping extends BaseMapping {
  getName() {
    return 'sdib';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B1,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B1,
      [CIDS.RTRIG]: emuInput.INP_B1,
    };
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(1, true, 2),
      new AnalogAdjustment(1, false, 2),
    ];
  }

  getRemapList() {
    return [
      ['P1 Fire 1', 'switch 0x4080'],
      ['P1 Target L/R', 'joyaxis 0 2'],
      ['P1 Target U/D', 'joyaxis 0 3'],
      ['P2 Target L/R', 'joyaxis 1 2'],
      ['P2 Target U/D', 'joyaxis 1 3'],
    ];
  }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Start 1', 'switch 0x02']
// 2: (2) ['Coin 2', 'switch 0x07']
// 3: (2) ['Start 2', 'switch 0x03']
// 4: (2) ['P1 Up', 'switch 0x4002']
// 5: (2) ['P1 Down', 'switch 0x4003']
// 6: (2) ['P1 Left', 'switch 0x4000']
// 7: (2) ['P1 Right', 'switch 0x4001']
// 8: (2) ['P1 Target L/R', 'mouseaxis 0']
// 9: (2) ['P1 Target U/D', 'mouseaxis 1']
// 10: (2) ['P1 Fire 1', 'switch 0x8080']
// 11: (2) ['P2 Up', 'switch 0x4102']
// 12: (2) ['P2 Down', 'switch 0x4103']
// 13: (2) ['P2 Left', 'switch 0x4100']
// 14: (2) ['P2 Right', 'switch 0x4101']
// 15: (2) ['P2 Target L/R', 'joyslider 0 0 speed 0x800 center 10']
// 16: (2) ['P2 Target U/D', 'joyslider 0 1 speed 0x800 center 10']
// 17: (2) ['P2 Fire 1', 'switch 0x4180']
// 18: (2) ['Service', 'switch 0x0A']
// 19: (2) ['Diagnostics', 'switch 0x3C']
// 20: (2) ['Reset', 'switch 0x3D']
// 21: (2) ['Dip 1', 'constant 0xFD']
// 22: (2) ['Dip 2', 'constant 0xFF']
