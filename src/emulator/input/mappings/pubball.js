// import {
//   CIDS,
// } from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class PowerUpBaseballMapping extends BaseMapping {

  getName() { return "pubball"; }

  // getButtonMap() {
  //   const { emuInput } = this;
  //   return {
  //     ...emuInput.BUTTONMAP_BASE,
  //     [CIDS.A]: emuInput.INP_B1,
  //     [CIDS.B]: emuInput.INP_B2,
  //     [CIDS.LBUMP]: emuInput.INP_B2,
  //     [CIDS.RBUMP]: emuInput.INP_B1,
  //     [CIDS.LTRIG]: emuInput.INP_B2,
  //     [CIDS.RTRIG]: emuInput.INP_B1,
  //   }
  // }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, .5),
      new AnalogAdjustment(0, false, .5),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Trackball X',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
      new AnalogModeDetector(
        0, 'P1 Trackball Y',
        'slider 0x4002 0x4003 speed 0x800 center 10', (emuInput.INP_UP | emuInput.INP_DOWN),
        'joyaxis 0 1', 0, false
      )
    ];
  }

  getRemapList() {
    return [
      ["P2 Trackball X", "joyaxis 1 0"],
      ["P2 Trackball Y", "joyaxis 1 1"],
    ];
  }

  isAnalogDpadEnabled() { return false; }
}


// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Up', 'switch 0x4002']
// 3: (2) ['P1 Down', 'switch 0x4003']
// 4: (2) ['P1 Left', 'switch 0x4000']
// 5: (2) ['P1 Right', 'switch 0x4001']
// 6: (2) ['P1 Trackball X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 7: (2) ['P1 Trackball Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 8: (2) ['P1 First Base', 'switch 0x4080']
// 9: (2) ['P1 Second Base', 'switch 0x4081']
// 10: (2) ['P1 Third Base', 'switch 0x4082']
// 11: (2) ['P1 Home', 'switch 0x4083']
// 12: (2) ['P1 Power Up', 'switch 0x4084']
// 13: (2) ['P2 Coin', 'switch 0x07']
// 14: (2) ['P2 Start', 'switch 0x03']
// 15: (2) ['P2 Up', 'switch 0x4102']
// 16: (2) ['P2 Down', 'switch 0x4103']
// 17: (2) ['P2 Left', 'switch 0x4100']
// 18: (2) ['P2 Right', 'switch 0x4101']
// 19: (2) ['P2 Trackball X', 'joyslider 0 0 speed 0x800 center 10']
// 20: (2) ['P2 Trackball Y', 'joyslider 0 1 speed 0x800 center 10']
// 21: (2) ['P2 First Base', 'switch 0x4180']
// 22: (2) ['P2 Second Base', 'switch 0x4181']
// 23: (2) ['P2 Third Base', 'switch 0x4182']
// 24: (2) ['P2 Home', 'switch 0x4183']
// 25: (2) ['P2 Power Up', 'switch 0x4184']
// 26: (2) ['Reset', 'switch 0x3D']
// 27: (2) ['Service', 'switch 0x0A']
// 28: (2) ['Service Mode', 'switch 0x3C']
// 29: (2) ['Dip A', 'constant 0x00']