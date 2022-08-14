import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class ZeroPointMapping extends BaseMapping {
  getName() {
    return 'zeropnt';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B1,
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
      ['P1 Fire 1', 'switch 0x4080'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Start 1', 'switch 0x02']
// 2: (2) ['Coin 2', 'switch 0x07']
// 3: (2) ['Start 2', 'switch 0x03']
// 4: (2) ['P1 Gun X', 'mouseaxis 0']
// 5: (2) ['P1 Gun Y', 'mouseaxis 1']
// 6: (2) ['P1 Fire 1', 'switch 0x8080']
// 7: (2) ['P2 Gun X', 'joyslider 0 0 speed 0x800 center 10']
// 8: (2) ['P2 Gun Y', 'joyslider 0 1 speed 0x800 center 10']
// 9: (2) ['P2 Fire 1', 'switch 0x4180']
// 10: (2) ['Reset', 'switch 0x3D']
// 11: (2) ['Diagnostic', 'switch 0x3C']
// 12: (2) ['Service', 'switch 0x0A']
// 13: (2) ['Dip 1', 'constant 0x08']
// 14: (2) ['Dip 2', 'constant 0x00']
