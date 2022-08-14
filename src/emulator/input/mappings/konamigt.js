import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class KonamiGtMapping extends BaseMapping {
  getName() {
    return 'konamigt';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.Y]: emuInput.INP_B3,
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B1,
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

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Accelerator', 'switch 0x4080']
// 2: (2) ['P1 Brake', 'switch 0x4081']
// 3: (2) ['P1 Gear Shift', 'switch 0x4082']
// 4: (2) ['P1 Wheel', 'mouseaxis 0']
// 5: (2) ['Reset', 'switch 0x3D']
// 6: (2) ['Service', 'switch 0x0A']
// 7: (2) ['Dip A', 'constant 0xFF']
// 8: (2) ['Dip B', 'constant 0x20']
// 9: (2) ['Dip C', 'constant 0xFF']
// 10: (2) ['Dip D', 'constant 0x00']
