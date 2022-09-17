import { CIDS } from '@webrcade/app-common';

import { AnalogModeDetector, BaseMapping } from './base';

export class DirtFoxMapping extends BaseMapping {
  getName() {
    return 'dirtfoxj';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.Y]: emuInput.INP_B4,
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B1,
    };
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'Steering',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
    ];
  }

  getRemapList() {
    return [
      ['Accelerator', 'switch 0x4080'],
      ['Brake', 'switch 0x4081'],
      ['Gear Up', 'switch 0x4082'],
      ['Gear Down', 'switch 0x4083'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['Coin', 'switch 0x06']
// 1: (2) ['Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 2: (2) ['Brake', 'switch 0x4084']
// 3: (2) ['Accelerator', 'switch 0x4085']
// 4: (2) ['Gear Up', 'switch 0x4080']
// 5: (2) ['Gear Down', 'switch 0x4081']
// 6: (2) ['Reset', 'switch 0x3D']
// 7: (2) ['Service', 'switch 0x0A']
// 8: (2) ['Dip A', 'constant 0xFF']
// 9: (2) ['Debug', 'constant 0xFF']
