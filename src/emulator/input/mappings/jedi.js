import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class ReturnOfTheJediMapping extends BaseMapping {
  getName() {
    return 'jedi';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B3,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B1,
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B2,
      [CIDS.LTRIG]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B2,
    };
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 0.6),
      new AnalogAdjustment(0, false, 0.6),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 Stick X',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'P1 Stick Y',
        'slider 0x4002 0x4003 speed 0x800 center 10',
        emuInput.INP_UP | emuInput.INP_DOWN,
        'joyaxis 0 1',
        0,
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
// 3: (2) ['P1 Button 3', 'switch 0x4082']
// 4: (2) ['P1 Stick X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 5: (2) ['P1 Stick Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 6: (2) ['Reset', 'switch 0x3D']
// 7: (2) ['Service', 'switch 0x0A']
// 8: (2) ['Tilt', 'switch 0x14']
// 9: (2) ['Dip A', 'constant 0x10']
