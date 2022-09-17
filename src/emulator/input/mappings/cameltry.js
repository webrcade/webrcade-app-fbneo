// import {
//   CIDS,
// } from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class CameltryMapping extends BaseMapping {
  getName() {
    return 'cameltry';
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
    return [new AnalogAdjustment(0, true, 1)];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 Paddle',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
    ];
  }

  getRemapList() {
    return [['P2 Paddle', 'joyaxis 1 0']];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Start 1', 'switch 0x02']
// 2: (2) ['Coin 2', 'switch 0x07']
// 3: (2) ['Start 2', 'switch 0x03']
// 4: (2) ['P1 Paddle', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 5: (2) ['P1 Fire 1', 'switch 0x4080']
// 6: (2) ['P2 Paddle', 'joyslider 0 0 speed 0x800 center 10']
// 7: (2) ['P2 Fire 1', 'switch 0x4180']
// 8: (2) ['Reset', 'switch 0x3D']
// 9: (2) ['Service', 'switch 0x0A']
// 10: (2) ['Tilt', 'switch 0x14']
// 11: (2) ['Dip 1', 'constant 0xFE']
// 12: (2) ['Dip 2', 'constant 0x7F']
