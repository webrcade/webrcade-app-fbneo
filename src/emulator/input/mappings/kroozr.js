import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class KozmikKroozrMapping extends BaseMapping {
  getName() {
    return 'kroozr';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B1,
    };
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 2),
      new AnalogAdjustment(0, false, 2),
      new AnalogAdjustment(1, true, 2),
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
      new AnalogModeDetector(
        0,
        'P1 Dial',
        'slider 0x4082 0x4083 speed 0x800 center 10',
        emuInput.INP_B3 | emuInput.INP_B4,
        'joyaxis 0 2',
        1,
        true,
      ),
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Stick X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 3: (2) ['P1 Stick Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 4: (2) ['P1 Dial', 'slider 0x2f 0x21 speed 0x800 center 10']
// 5: (2) ['P1 Button 1', 'switch 0x4080']
// 6: (2) ['P1 Button 2', 'switch 0x4081']
// 7: (2) ['P2 Coin', 'switch 0x07']
// 8: (2) ['P2 Start', 'switch 0x03']
// 9: (2) ['Reset', 'switch 0x3D']
// 10: (2) ['Service', 'switch 0x0A']
// 11: (2) ['Tilt', 'switch 0x14']
// 12: (2) ['Dip A', 'constant 0xBF']
// 13: (2) ['Dip B', 'constant 0x80']
