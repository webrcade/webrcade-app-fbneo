import { CIDS } from '@webrcade/app-common';

import { BaseMapping } from './base';

export class WaterMatchMapping extends BaseMapping {
  getName() {
    return 'wmatch';
  }

  getAnalogToDpadMap() {
    return [2, 3];
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B1,
      [CIDS.RTRIG]: emuInput.INP_B1,
    };
  }

  getRemapList() {
    return [
      ['P1 Fire 1', 'switch 0x4080'],
      ['P1 Right Up', 'switch 0x4202'],
      ['P1 Right Down', 'switch 0x4203'],
      ['P1 Right Left', 'switch 0x4200'],
      ['P1 Right Right', 'switch 0x4201'],
      ['P2 Fire 1', 'switch 0x4180'],
      ['P2 Right Up', 'switch 0x4302'],
      ['P2 Right Down', 'switch 0x4303'],
      ['P2 Right Left', 'switch 0x4300'],
      ['P2 Right Right', 'switch 0x4301'],
    ];
  }
}
