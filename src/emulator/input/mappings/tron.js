import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, BaseMapping } from './base';

export class TronMapping extends BaseMapping {
  getName() {
    return 'tron';
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
      new AnalogAdjustment(1, true, 0.75),
      new AnalogAdjustment(1, false, 0.75),
    ];
  }

  getRemapList() {
    return [
      ['P1 Dial', 'joyaxis 0 2'],
      ['P2 Dial', 'joyaxis 1 2'],
    ];
  }
}

// 0: (2)['P1 Coin', 'switch 0x06']
// 1: (2)['P1 Start', 'switch 0x02']
// 2: (2)['P1 Up', 'switch 0x4002']
// 3: (2)['P1 Down', 'switch 0x4003']
// 4: (2)['P1 Left', 'switch 0x4000']
// 5: (2)['P1 Right', 'switch 0x4001']
// 6: (2)['P1 Button 1', 'switch 0x4080']
// 7: (2)['P1 Dial', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 8: (2)['P2 Coin', 'switch 0x07']
// 9: (2)['P2 Start', 'switch 0x03']
// 10: (2)['P2 Up', 'switch 0x4102']
// 11: (2)['P2 Down', 'switch 0x4103']
// 12: (2)['P2 Left', 'switch 0x4100']
// 13: (2)['P2 Right', 'switch 0x4101']
// 14: (2)['P2 Button 1', 'switch 0x4180']
// 15: (2)['P2 Dial', 'joyslider 0 0 speed 0x800 center 10']
// 16: (2)['Reset', 'switch 0x3D']
// 17: (2)['Service', 'switch 0x0A']
// 18: (2)['Tilt', 'switch 0x14']
// 19: (2)['Dip A', 'constant 0x80']
// 20: (2)['Dip B', 'constant 0x80']
