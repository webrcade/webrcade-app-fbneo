import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class RailChaseMapping extends BaseMapping {
  getName() {
    return 'rchase';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B1,
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
        'P1 Left/Right',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'P1 Up/Down',
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
      ['P2 Left/Right', 'joyaxis 1 0'],
      ['P2 Up/Down', 'joyaxis 1 1'],
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
// 4: (2) ['P1 Left/Right', 'mouseaxis 0']
// 5: (2) ['P1 Up/Down', 'mouseaxis 1']
// 6: (2) ['P1 Fire 1', 'switch 0x8080']
// 7: (2) ['P2 Left/Right', 'joyslider 0 0 speed 0x800 center 10']
// 8: (2) ['P2 Up/Down', 'joyslider 0 1 speed 0x800 center 10']
// 9: (2) ['P2 Fire 1', 'switch 0x4180']
// 10: (2) ['Service', 'switch 0x0A']
// 11: (2) ['Diagnostics', 'switch 0x3C']
// 12: (2) ['Reset', 'switch 0x3D']
// 13: (2) ['Dip 1', 'constant 0x63']
// 14: (2) ['Dip 2', 'constant 0xFF']
