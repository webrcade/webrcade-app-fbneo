import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class AirRescueMapping extends BaseMapping {
  getName() {
    return 'arescue';
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

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 1),
      new AnalogAdjustment(0, false, 1),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 Left / Right',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'P1 Up / Down',
        'slider 0x4002 0x4003 speed 0x800 center 10',
        emuInput.INP_UP | emuInput.INP_DOWN,
        'joyaxis 0 1',
        0,
        false,
      ),
      new AnalogModeDetector(
        0,
        'P1 Throttle',
        'slider 0x4082 0x4083 speed 0x800 center 10',
        emuInput.INP_B3 | emuInput.INP_B4,
        'joyaxis 0 3',
        1,
        false,
      ),
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Button 1', 'switch 0x4080']
// 2: (2) ['P1 Button 2', 'switch 0x4081']
// 3: (2) ['P1 Left / Right', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['P1 Up / Down', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 5: (2) ['P1 Throttle', 'slider 0x2f 0x21 speed 0x800 center 10']
// 6: (2) ['Reset', 'switch 0x3D']
// 7: (2) ['Service Mode', 'switch 0x3C']
// 8: (2) ['Service', 'switch 0x0A']
// 9: (2) ['Dip A', 'constant 0x0F']
