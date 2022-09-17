import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class BattleSharkMapping extends BaseMapping {
  getName() {
    return 'bshark';
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
        'Crosshair X',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'Crosshair Y',
        'slider 0x4002 0x4003 speed 0x800 center 10',
        emuInput.INP_UP | emuInput.INP_DOWN,
        'joyaxis 0 1',
        0,
        false,
      ),
    ];
  }

  // getRemapList() {
  //   return [
  //     ["P2 Right / left", "joyaxis 1 0"],
  //     ["P2 Up / Down", "joyaxis 1 1"],
  //     ['P1 Button 1', 'switch 0x4080'],
  //     ['P1 Button 2', 'switch 0x4081']
  //   ];
  // }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Start 1', 'switch 0x02']
// 2: (2) ['Coin 2', 'switch 0x07']
// 3: (2) ['Start 2', 'switch 0x03']
// 4: (2) ['Crosshair X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 5: (2) ['Crosshair Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 6: (2) ['Fire 1', 'switch 0x4080']
// 7: (2) ['Fire 2', 'switch 0x4081']
// 8: (2) ['Reset', 'switch 0x3D']
// 9: (2) ['Service', 'switch 0x0A']
// 10: (2) ['Tilt', 'switch 0x14']
// 11: (2) ['Dip 1', 'constant 0xFF']
// 12: (2) ['Dip 2', 'constant 0xF7']
