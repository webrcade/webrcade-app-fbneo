import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class CyberTankMapping extends BaseMapping {
  getName() {
    return 'cybertnk';
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
      new AnalogAdjustment(0, true, 1),
      new AnalogAdjustment(0, false, 1),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 Steering',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'P1 Accel',
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
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 3: (2) ['P1 Accel', 'slider 0x2f 0x21 speed 0x800 center 10']
// 4: (2) ['P1 Button 1', 'switch 0x4080']
// 5: (2) ['P1 Button 2', 'switch 0x4081']
// 6: (2) ['P2 Coin', 'switch 0x07']
// 7: (2) ['P2 Start', 'switch 0x03']
// 8: (2) ['P2 Gun X', 'joyslider 0 0 speed 0x800 center 10']
// 9: (2) ['P2 Gun Y', 'joyslider 0 1 speed 0x800 center 10']
// 10: (2) ['P2 Button 1', 'switch 0x4180']
// 11: (2) ['P2 Button 2', 'switch 0x4181']
// 12: (2) ['Reset', 'switch 0x3D']
// 13: (2) ['Service', 'switch 0x0A']
// 14: (2) ['Dip A', 'constant 0x08']
// 15: (2) ['Dip B', 'constant 0xE4']
// 16: (2) ['Dip C', 'constant 0xFF']
// 17: (2) ['Dip D', 'constant 0xFF']
// 18: (2) ['Dip E', 'constant 0xFF']
