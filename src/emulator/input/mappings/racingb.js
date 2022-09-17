import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class RacingBeatMapping extends BaseMapping {
  getName() {
    return 'racingb';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B5,
      [CIDS.B]: emuInput.INP_B4,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.Y]: emuInput.INP_B6,
      [CIDS.RBUMP]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B2,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B1,
    };
  }

  getAnalogAdjustments() {
    return [new AnalogAdjustment(0, true, 1)];
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
      ['Gear', 'switch 0x4082'],
      ['Pit In', 'switch 0x4083'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 1: (2) ['Start 1', 'switch 0x02']
// 2: (2) ['Coin 2', 'switch 0x07']
// 3: (2) ['Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['Brake', 'switch 0x4080']
// 5: (2) ['Accelerate', 'switch 0x4081']
// 6: (2) ['Pit In', 'switch 0x4082']
// 7: (2) ['Gear', 'switch 0x4083']
// 8: (2) ['Centre', 'switch 0x4084']
// 9: (2) ['Reset', 'switch 0x3D']
// 10: (2) ['Service', 'switch 0x0A']
// 11: (2) ['Dip 1', 'constant 0xFF']
// 12: (2) ['Dip 2', 'constant 0xFF']
