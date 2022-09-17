import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, BaseMapping } from './base';

export class GunbusterMapping extends BaseMapping {
  getName() {
    return 'gunbustr';
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

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(1, true, 2),
      new AnalogAdjustment(1, false, 2),
    ];
  }

  getRemapList() {
    return [
      ['P1 Gun X', 'joyaxis 0 2'],
      ['P1 Gun Y', 'joyaxis 0 3'],
      ['P2 Gun X', 'joyaxis 1 2'],
      ['P2 Gun Y', 'joyaxis 1 3'],
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
// 8: (2) ['P1 Gun X', 'mouseaxis 0']
// 9: (2) ['P1 Gun Y', 'mouseaxis 1']
// 10: (2) ['P2 Coin', 'switch 0x07']
// 11: (2) ['P2 Start', 'switch 0x03']
// 12: (2) ['P2 Up', 'switch 0x4102']
// 13: (2) ['P2 Down', 'switch 0x4103']
// 14: (2) ['P2 Left', 'switch 0x4100']
// 15: (2) ['P2 Right', 'switch 0x4101']
// 16: (2) ['P2 Button 1', 'switch 0x4180']
// 17: (2) ['P2 Button 2', 'switch 0x4181']
// 18: (2) ['P2 Gun X', 'joyslider 0 0 speed 0x800 center 10']
// 19: (2) ['P2 Gun Y', 'joyslider 0 1 speed 0x800 center 10']
// 20: (2) ['Freeze', 'switch 0x14']
// 21: (2) ['Reset', 'switch 0x3D']
// 22: (2) ['Service', 'switch 0x0A']
// 23: (2) ['Service Mode', 'switch 0x3C']
