import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class SpyHunterMapping extends BaseMapping {
  getName() {
    return 'spyhunt';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B6,
      [CIDS.B]: emuInput.INP_B5,
      [CIDS.X]: emuInput.INP_B4,
      [CIDS.Y]: emuInput.INP_B3,
      [CIDS.LBUMP]: emuInput.INP_B5,
      [CIDS.RBUMP]: emuInput.INP_B6,
      [CIDS.LTRIG]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B1,
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
        'P1 Wheel',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['Coin', 'switch 0x06']
// 1: (2) ['Weapons Van', 'switch 0x02']
// 2: (2) ['Gear Shift', 'switch 0x4081']
// 3: (2) ['Missiles', 'switch 0x4082']
// 4: (2) ['Oil Slick', 'switch 0x4083']
// 5: (2) ['Smoke Screen', 'switch 0x4084']
// 6: (2) ['Machine Gun', 'switch 0x4085']
// 7: (2) ['P1 Wheel', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 8: (2) ['P1 Accelerator', 'switch 0x4080']
// 9: (2) ['Reset', 'switch 0x3D']
// 10: (2) ['Service', 'switch 0x0A']
// 11: (2) ['Tilt', 'switch 0x14']
// 12: (2) ['Dip A', 'constant 0xFF']
// 13: (2) ['Dip B', 'constant 0xFF']
// 14: (2) ['Dip C', 'constant 0xFF']
// 15: (2) ['Dip D', 'constant 0xFF']
// 16: (2) ['Dip E', 'constant 0xFF']
// 17: (2) ['Dip F', 'constant 0x80']
