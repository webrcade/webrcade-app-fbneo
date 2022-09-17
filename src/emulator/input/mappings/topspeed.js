import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class TopSpeedMapping extends BaseMapping {
  getName() {
    return 'topspeed';
  }

  getAnalogAdjustments() {
    return [new AnalogAdjustment(0, true, 0.5)];
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B4,
      [CIDS.Y]: emuInput.INP_B3,
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
      ['Dip 1', 'constant 0xFE'],
      ['Dip 2', 'constant 0xFF'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 3: (2) ['P1 Fire 1 (Accelerator)', 'switch 0x4080']
// 4: (2) ['P1 Fire 2 (Brake)', 'switch 0x4081']
// 5: (2) ['P1 Fire 3 (Nitro)', 'switch 0x4082']
// 6: (2) ['P1 Fire 4 (Gear)', 'switch 0x4083']
// 7: (2) ['P2 Coin', 'switch 0x07']
// 8: (2) ['Reset', 'switch 0x3D']
// 9: (2) ['Service', 'switch 0x0A']
// 10: (2) ['Tilt', 'switch 0x14']
// 11: (2) ['Dip 1', 'constant 0xFC']
// 12: (2) ['Dip 2', 'constant 0xFF']
