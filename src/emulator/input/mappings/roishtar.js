import { CIDS } from '@webrcade/app-common';

import { BaseMapping } from './base';

export class ReturnOfIshtarMapping extends BaseMapping {
  getName() {
    return 'roishtar';
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
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B2,
      [CIDS.LTRIG]: emuInput.INP_B1,
      [CIDS.RTRIG]: emuInput.INP_B2,
    };
  }
}

// 0: (2) ['Coin A', 'switch 0x06']
// 1: (2) ['Coin B', 'switch 0x07']
// 2: (2) ['Start 1', 'switch 0x02']
// 3: (2) ['Start 2', 'switch 0x03']
// 4: (2) ['P1 Left Up', 'switch 0x4002']
// 5: (2) ['P1 Left Down', 'switch 0x4003']
// 6: (2) ['P1 Left Left', 'switch 0x4000']
// 7: (2) ['P1 Left Right', 'switch 0x4001']
// 8: (2) ['P1 Right Up', 'switch 0x4102']
// 9: (2) ['P1 Right Down', 'switch 0x4103']
// 10: (2) ['P1 Right Left', 'switch 0x4100']
// 11: (2) ['P1 Right Right', 'switch 0x4101']
// 12: (2) ['P1 Button 1', 'switch 0x4080']
// 13: (2) ['P1 Button 2', 'switch 0x4081']
// 14: (2) ['Reset', 'switch 0x3D']
// 15: (2) ['Service 1', 'switch 0x0A']
// 16: (2) ['Service 2', 'switch 0x0A']
// 17: (2) ['Dip A', 'constant 0xFF']
// 18: (2) ['Dip B', 'constant 0xBF']
