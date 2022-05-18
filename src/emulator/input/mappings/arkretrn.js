// import {
//   CIDS,
// } from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class ArkanoidReturnsMapping extends BaseMapping {

  getName() { return "arkretrn"; }

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
      new AnalogAdjustment(0, true, .4)
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Analog Dial',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
    ];
  }

  getRemapList() {
    return [
      ['P2 Analog Dial', 'joyaxis 1 0']
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
// 6: (2) ['P1 Button 1', 'switch 0x4080']
// 7: (2) ['P1 Button 2', 'switch 0x4081']
// 8: (2) ['P1 Button 3', 'switch 0x4082']
// 9: (2) ['P1 Button 4', 'switch 0x4083']
// 10: (2) ['P1 Analog Dial', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 11: (2) ['P2 Coin', 'switch 0x07']
// 12: (2) ['P2 Start', 'switch 0x03']
// 13: (2) ['P2 Up', 'switch 0x4102']
// 14: (2) ['P2 Down', 'switch 0x4103']
// 15: (2) ['P2 Left', 'switch 0x4100']
// 16: (2) ['P2 Right', 'switch 0x4101']
// 17: (2) ['P2 Button 1', 'switch 0x4180']
// 18: (2) ['P2 Button 2', 'switch 0x4181']
// 19: (2) ['P2 Button 3', 'switch 0x4182']
// 20: (2) ['P2 Button 4', 'switch 0x4183']
// 21: (2) ['P2 Analog Dial', 'joyslider 0 0 speed 0x800 center 10']
// 22: (2) ['P3 Coin', 'switch 0x08']
// 23: (2) ['P3 Start', 'switch 0x04']
// 24: (2) ['P3 Up', 'switch 0x4202']
// 25: (2) ['P3 Down', 'switch 0x4203']
// 26: (2) ['P3 Left', 'switch 0x4200']
// 27: (2) ['P3 Right', 'switch 0x4201']
// 28: (2) ['P3 Button 1', 'switch 0x4280']
// 29: (2) ['P3 Button 2', 'switch 0x4281']
// 30: (2) ['P3 Button 3', 'switch 0x4282']
// 31: (2) ['P3 Button 4', 'switch 0x4283']
// 32: (2) ['P4 Coin', 'switch 0x09']
// 33: (2) ['P4 Start', 'switch 0x05']
// 34: (2) ['P4 Up', 'switch 0x4302']
// 35: (2) ['P4 Down', 'switch 0x4303']
// 36: (2) ['P4 Left', 'switch 0x4300']
// 37: (2) ['P4 Right', 'switch 0x4301']
// 38: (2) ['P4 Button 1', 'switch 0x4380']
// 39: (2) ['P4 Button 2', 'switch 0x4381']
// 40: (2) ['P4 Button 3', 'switch 0x4382']
// 41: (2) ['P4 Button 4', 'switch 0x4383']
// 42: (2) ['Reset', 'switch 0x3D']
// 43: (2) ['Service 1', 'switch 0x0A']
// 44: (2) ['Service 2', 'switch 0x0A']
// 45: (2) ['Service 3', 'switch 0x0A']
// 46: (2) ['Service Mode', 'switch 0x3C']
// 47: (2) ['Tilt', 'switch 0x14']
// 48: (2) ['Dip', 'constant 0x00']