import { CIDS } from '@webrcade/app-common';

import { BaseMapping } from './base';

export class VindicatorsMapping extends BaseMapping {
  getName() {
    return 'vindictr';
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
      [CIDS.Y]: emuInput.INP_B4,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B2,
      [CIDS.LTRIG]: emuInput.INP_B3,
      [CIDS.RTRIG]: emuInput.INP_B4,
    };
  }

  getRemapList() {
    return [
      ['P1 Left Stick Up', 'switch 0x4002'],
      ['P1 Left Stick Down', 'switch 0x4003'],
      ['P1 Right Stick Up', 'switch 0x4202'],
      ['P1 Right Stick Down', 'switch 0x4203'],
      ['P1 Up', 'undefined'],
      ['P1 Down', 'undefined'],
      ['P1 Left', 'undefined'],
      ['P1 Right', 'undefined'],
      ['P2 Left Stick Up', 'switch 0x4102'],
      ['P2 Left Stick Down', 'switch 0x4103'],
      ['P2 Right Stick Up', 'switch 0x4302'],
      ['P2 Right Stick Down', 'switch 0x4303'],
      ['P2 Up', 'undefined'],
      ['P2 Down', 'undefined'],
      ['P2 Left', 'undefined'],
      ['P2 Right', 'undefined'],
    ];
  }
}
