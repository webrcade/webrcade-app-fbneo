import { CIDS } from '@webrcade/app-common';

import { AnalogModeDetector, BaseMapping } from './base';

export class GroundFxMapping extends BaseMapping {
  getName() {
    return 'groundfx';
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
        'P1 Steering',
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
      ['P1 Accelerator', 'switch 0x4080'],
      ['P1 Brake', 'switch 0x4081'],
      ['P1 Shift Hi', 'switch 0x4082'],
      ['P1 Shift Lo', 'switch 0x4083'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Brake', 'switch 0x4080']
// 2: (2) ['P1 Shift Lo', 'switch 0x4081']
// 3: (2) ['P1 Shift Hi', 'switch 0x4082']
// 4: (2) ['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 5: (2) ['P1 Accelerator', 'switch 0x4080']
// 6: (2) ['P2 Coin', 'switch 0x07']
// 7: (2) ['Reset', 'switch 0x3D']
// 8: (2) ['Service', 'switch 0x0A']
// 9: (2) ['Service Mode', 'switch 0x3C']
