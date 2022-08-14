// import {
//   CIDS,
// } from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class JumpingPopMapping extends BaseMapping {
  getName() {
    return 'jpopnics';
  }

  // getButtonMap() {
  //   const { emuInput } = this;
  //   return {
  //     ...emuInput.BUTTONMAP_BASE,
  //     [CIDS.A]: emuInput.INP_UP,
  //     [CIDS.RBUMP]: emuInput.INP_UP,
  //     [CIDS.RTRIG]: emuInput.INP_UP,
  //   }
  // }

  getAnalogAdjustments() {
    return [new AnalogAdjustment(0, true, 2)];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 Right / left',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
    ];
  }

  getRemapList() {
    return [['P2 Right / left', 'joyaxis 1 0']];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Button 1', 'switch 0x4080']
// 3: (2) ['P1 Button 2', 'switch 0x4081']
// 4: (2) ['P1 Right / left', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 5: (2) ['P2 Coin', 'switch 0x07']
// 6: (2) ['P2 Start', 'switch 0x03']
// 7: (2) ['P2 Button 1', 'switch 0x4180']
// 8: (2) ['P2 Button 2', 'switch 0x4181']
// 9: (2) ['P2 Right / left', 'joyslider 0 0 speed 0x800 center 10']
// 10: (2) ['Reset', 'switch 0x3D']
// 11: (2) ['Dip A', 'constant 0xFF']
// 12: (2) ['Dip B', 'constant 0xFF']
