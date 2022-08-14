// import {
//   CIDS,
// } from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class SpaceHarrierMapping extends BaseMapping {
  getName() {
    return 'sharrier';
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 1.5),
      new AnalogAdjustment(0, false, 1.5),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'Left/Right',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'Up/Down',
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
  //     ['P2 Trackball X', 'joyaxis 1 0'],
  //     ['P2 Trackball Y', 'joyaxis 1 1'],
  //     ['P3 Trackball X', 'joyaxis 2 0'],
  //     ['P3 Trackball Y', 'joyaxis 2 1'],
  //   ];
  // }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Start 1', 'switch 0x02']
// 2: (2) ['Coin 2', 'switch 0x07']
// 3: (2) ['Left/Right', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['Up/Down', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 5: (2) ['Fire 1', 'switch 0x4080']
// 6: (2) ['Fire 2', 'switch 0x4081']
// 7: (2) ['Fire 3', 'switch 0x4082']
// 8: (2) ['Service', 'switch 0x0A']
// 9: (2) ['Diagnostics', 'switch 0x3C']
// 10: (2) ['Reset', 'switch 0x3D']
// 11: (2) ['Dip 1', 'constant 0xFF']
// 12: (2) ['Dip 2', 'constant 0xFC']
