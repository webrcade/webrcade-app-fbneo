// import {
//   CIDS,
// } from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class ArkanoidMapping extends BaseMapping {

  getName() { return "arkanoid"; }

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
    return [
      new AnalogAdjustment(0, true, 1.5)
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Right / left',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
    ];
  }

  getRemapList() {
    return [
      ['P2 Right / left', 'joyaxis 1 0']
    ];
  }

  isAnalogDpadEnabled() { return false; }
}


// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 start', 'switch 0x02']
// 2: (2) ['P1 Button 1', 'switch 0x4080']
// 3: (2) ['P1 Right / left', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['P2 Coin', 'switch 0x07']
// 5: (2) ['P2 start', 'switch 0x03']
// 6: (2) ['P2 Button 1', 'switch 0x4180']
// 7: (2) ['P2 Right / left', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 8: (2) ['Tilt', 'switch 0x14']
// 9: (2) ['Service', 'switch 0x3C']
// 10: (2) ['Reset', 'switch 0x3D']
// 11: (2) ['Dip 1', 'constant 0xFE']