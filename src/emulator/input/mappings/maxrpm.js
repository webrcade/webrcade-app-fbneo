import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class MaxRpmMapping extends BaseMapping {
  getName() {
    return 'maxrpm';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B4,
      [CIDS.Y]: emuInput.INP_B3,
      [CIDS.RBUMP]: emuInput.INP_B1,
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

  getRemapList() {
    return [
      ['P2 Wheel', 'joyaxis 1 0'],
      ['P1 Shift Up', 'switch 0x4082'],
      ['P1 Shift Down', 'switch 0x4083'],
      ['P2 Shift Up', 'switch 0x4182'],
      ['P2 Shift Down', 'switch 0x4183'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Wheel', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 3: (2) ['P1 Accelerator', 'switch 0x4080']
// 4: (2) ['P1 Shift Up', 'switch 0x4082']
// 5: (2) ['P1 Shift Down', 'switch 0x4083']
// 6: (2) ['P2 Coin', 'switch 0x07']
// 7: (2) ['P2 Start', 'switch 0x03']
// 8: (2) ['P2 Wheel', 'joyslider 0 0 speed 0x800 center 10']
// 9: (2) ['P2 Accelerator', 'switch 0x4180']
// 10: (2) ['P2 Shift Up', 'switch 0x4102']
// 11: (2) ['P2 Shift Down', 'switch 0x4103']
// 12: (2) ['Reset', 'switch 0x3D']
// 13: (2) ['Service', 'switch 0x0A']
// 14: (2) ['Tilt', 'switch 0x14']
// 15: (2) ['Dip A', 'constant 0xFF']
// 16: (2) ['Dip B', 'constant 0xFF']
// 17: (2) ['Dip C', 'constant 0xFF']
// 18: (2) ['Dip D', 'constant 0xFF']
// 19: (2) ['Dip E', 'constant 0xFF']
// 20: (2) ['Dip F', 'constant 0x80']
