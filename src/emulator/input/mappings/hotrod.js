import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class HotRodMapping extends BaseMapping {
  getName() {
    return 'hotrod';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.RTRIG]: emuInput.INP_B1,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B1,
    };
  }

  getAnalogAdjustments() {
    return [new AnalogAdjustment(0, true, 0.65)];
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

  getRemapList() {
    return [
      ['P2 Wheel', 'joyaxis 1 0'],
      ['P3 Wheel', 'joyaxis 2 0'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Wheel', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 2: (2) ['P1 Accelerator', 'switch 0x4080']
// 3: (2) ['P2 Coin', 'switch 0x07']
// 4: (2) ['P2 Wheel', 'joyslider 0 0 speed 0x800 center 10']
// 5: (2) ['P2 Accelerator', 'switch 0x4180']
// 6: (2) ['P3 Coin', 'switch 0x08']
// 7: (2) ['P3 Wheel', 'joyslider 1 0 speed 0x800 center 10']
// 8: (2) ['P3 Accelerator', 'switch 0x4280']
// 9: (2) ['Reset', 'switch 0x3D']
// 10: (2) ['Service 1', 'switch 0x0A']
// 11: (2) ['Service 2', 'switch 0x0A']
// 12: (2) ['Service 3', 'switch 0x0A']
// 13: (2) ['Service Mode', 'switch 0x3C']
// 14: (2) ['Dip A', 'constant 0xFF']
// 15: (2) ['Dip B', 'constant 0xFF']
