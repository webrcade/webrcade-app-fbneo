import { CIDS } from '@webrcade/app-common';

import { BaseMapping } from './base';

export class EcoFightersMapping extends BaseMapping {
  getName() {
    return 'ecofghtr';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B3,
      [CIDS.LTRIG]: emuInput.INP_B1,
      [CIDS.RTRIG]: emuInput.INP_B3,
    };
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Up', 'switch 0x4002']
// 3: (2) ['P1 Down', 'switch 0x4003']
// 4: (2) ['P1 Left', 'switch 0x4000']
// 5: (2) ['P1 Right', 'switch 0x4001']
// 6: (2) ['P1 Turn 1', 'switch 0x4080']
// 7: (2) ['P1 Attack', 'switch 0x4081']
// 8: (2) ['P1 Turn 2', 'switch 0x4082']
// 9: (2) ['P2 Coin', 'switch 0x07']
// 10: (2) ['P2 Start', 'switch 0x03']
// 11: (2) ['P2 Up', 'switch 0x4102']
// 12: (2) ['P2 Down', 'switch 0x4103']
// 13: (2) ['P2 Left', 'switch 0x4100']
// 14: (2) ['P2 Right', 'switch 0x4101']
// 15: (2) ['P2 Turn 1', 'switch 0x4180']
// 16: (2) ['P2 Attack', 'switch 0x4181']
// 17: (2) ['P2 Turn 2', 'switch 0x4182']
// 18: (2) ['Reset', 'switch 0x3D']
// 19: (2) ['Diagnostic', 'switch 0x3C']
// 20: (2) ['Service', 'switch 0x0A']
// 21: (2) ['Volume Up', 'switch 0x4083']
// 22: (2) ['Volume Down', 'switch 0x4084']
