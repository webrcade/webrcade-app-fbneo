import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class Alien3Mapping extends BaseMapping {
  getName() {
    return 'alien3';
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
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 Gun X',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'P1 Gun Y',
        'slider 0x4002 0x4003 speed 0x800 center 10',
        emuInput.INP_UP | emuInput.INP_DOWN,
        'joyaxis 0 1',
        0,
        false,
      ),
    ];
  }

  getRemapList() {
    return [
      ['P2 Gun X', 'joyaxis 1 0'],
      ['P2 Gun Y', 'joyaxis 1 1'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Button 1', 'switch 0x4080']
// 2: (2) ['P1 Button 2', 'switch 0x4081']
// 3: (2) ['P1 Gun X', 'mouseaxis 0']
// 4: (2) ['P1 Gun Y', 'mouseaxis 1']
// 5: (2) ['P2 Coin', 'switch 0x07']
// 6: (2) ['P2 Button 1', 'switch 0x4180']
// 7: (2) ['P2 Button 2', 'switch 0x4181']
// 8: (2) ['P2 Gun X', 'joyslider 0 0 speed 0x800 center 10']
// 9: (2) ['P2 Gun Y', 'joyslider 0 1 speed 0x800 center 10']
// 10: (2) ['Reset', 'switch 0x3D']
// 11: (2) ['Service Mode', 'switch 0x3C']
// 12: (2) ['Service 1', 'switch 0x0A']
// 13: (2) ['Service 2', 'switch 0x0A']
// 14: (2) ['Service 3', 'switch 0x0A']
// 15: (2) ['Dip A', 'constant 0x0F']
