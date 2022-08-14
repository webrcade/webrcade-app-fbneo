import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class RevolutionXMapping extends BaseMapping {
  getName() {
    return 'revx';
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
      ['P3 Gun X', 'joyaxis 2 0'],
      ['P3 Gun Y', 'joyaxis 2 1'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Button 1', 'switch 0x4080']
// 3: (2) ['P1 Button 2', 'switch 0x4081']
// 4: (2) ['P1 Gun X', 'mouseaxis 0']
// 5: (2) ['P1 Gun Y', 'mouseaxis 1']
// 6: (2) ['P2 Coin', 'switch 0x07']
// 7: (2) ['P2 Start', 'switch 0x03']
// 8: (2) ['P2 Button 1', 'switch 0x4180']
// 9: (2) ['P2 Button 2', 'switch 0x4181']
// 10: (2) ['P2 Gun X', 'joyslider 0 0 speed 0x800 center 10']
// 11: (2) ['P2 Gun Y', 'joyslider 0 1 speed 0x800 center 10']
// 12: (2) ['P3 Coin', 'switch 0x08']
// 13: (2) ['P3 Start', 'switch 0x04']
// 14: (2) ['P3 Button 1', 'switch 0x4280']
// 15: (2) ['P3 Button 2', 'switch 0x4281']
// 16: (2) ['P3 Gun X', 'joyslider 0 0 speed 0x800 center 10']
// 17: (2) ['P3 Gun Y', 'joyslider 0 1 speed 0x800 center 10']
// 18: (2) ['Reset', 'switch 0x3D']
// 19: (2) ['Service', 'switch 0x0A']
// 20: (2) ['Service Mode', 'switch 0x3C']
// 21: (2) ['Tilt', 'switch 0x14']
// 22: (2) ['Volume Down', 'switch 0x4086']
// 23: (2) ['Volume Up', 'switch 0x4087']
// 24: (2) ['Dip A', 'constant 0x7C']
// 25: (2) ['Dip B', 'constant 0xFF']
// 26: (2) ['Dip C', 'constant 0x00']
