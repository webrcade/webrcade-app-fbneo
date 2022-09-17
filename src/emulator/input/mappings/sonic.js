// import {
//   CIDS,
// } from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class SonicMapping extends BaseMapping {
  getName() {
    return 'sonic';
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
        'P1 Trackball X',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'P1 Trackball Y',
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
      ['P2 Trackball X', 'joyaxis 1 0'],
      ['P2 Trackball Y', 'joyaxis 1 1'],
      ['P3 Trackball X', 'joyaxis 2 0'],
      ['P3 Trackball Y', 'joyaxis 2 1'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Button 1', 'switch 0x4080']
// 3: (2) ['P1 Trackball X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['P1 Trackball Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 5: (2) ['P2 Coin', 'switch 0x07']
// 6: (2) ['P2 Start', 'switch 0x03']
// 7: (2) ['P2 Button 1', 'switch 0x4180']
// 8: (2) ['P2 Trackball X', 'joyslider 0 0 speed 0x800 center 10']
// 9: (2) ['P2 Trackball Y', 'joyslider 0 1 speed 0x800 center 10']
// 10: (2) ['P3 Coin', 'switch 0x08']
// 11: (2) ['P3 Start', 'switch 0x04']
// 12: (2) ['P3 Button 1', 'switch 0x4280']
// 13: (2) ['P3 Trackball X', 'joyslider 1 0 speed 0x800 center 10']
// 14: (2) ['P3 Trackball Y', 'joyslider 1 1 speed 0x800 center 10']
// 15: (2) ['Reset', 'switch 0x3D']
// 16: (2) ['Service Mode', 'switch 0x3C']
// 17: (2) ['Service 1', 'switch 0x0A']
// 18: (2) ['Service 2', 'switch 0x0A']
// 19: (2) ['Service 3', 'switch 0x0A']
// 20: (2) ['Dip A', 'constant 0x0F']
