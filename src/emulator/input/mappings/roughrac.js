import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class RoughRacerMapping extends BaseMapping {

  getName() { return "hotroughracrod"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.Y]: emuInput.INP_B3,
      [CIDS.RBUMP]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B2,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B1,
    }
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, .5)
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Wheel',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
    ];
  }

  getRemapList() {
    return [
      ['P2 Wheel', 'joyaxis 1 0'],
      ['P3 Wheel', 'joyaxis 2 0'],
    ];
  }

  isAnalogDpadEnabled() { return false; }
}



// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Wheel', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 3: (2) ['P1 Up', 'switch 0x4002']
// 4: (2) ['P1 Down', 'switch 0x4003']
// 5: (2) ['P1 Left', 'switch 0x4000']
// 6: (2) ['P1 Right', 'switch 0x4001']
// 7: (2) ['P1 Button 1', 'switch 0x4080']
// 8: (2) ['P1 Button 2', 'switch 0x4081']
// 9: (2) ['P1 Button 3', 'switch 0x4082']
// 10: (2) ['P2 Coin', 'switch 0x07']
// 11: (2) ['P2 Start', 'switch 0x03']
// 12: (2) ['P2 Wheel', 'joyslider 0 0 speed 0x800 center 10']
// 13: (2) ['P2 Up', 'switch 0x4102']
// 14: (2) ['P2 Down', 'switch 0x4103']
// 15: (2) ['P2 Left', 'switch 0x4100']
// 16: (2) ['P2 Right', 'switch 0x4101']
// 17: (2) ['P2 Button 1', 'switch 0x4180']
// 18: (2) ['P2 Button 2', 'switch 0x4181']
// 19: (2) ['P2 Button 3', 'switch 0x4182']
// 20: (2) ['Reset', 'switch 0x3D']
// 21: (2) ['Service Mode', 'switch 0x3C']
// 22: (2) ['Service 1', 'switch 0x0A']
// 23: (2) ['Service 2', 'switch 0x0A']
// 24: (2) ['Service 3', 'switch 0x0A']
// 25: (2) ['Dip A', 'constant 0xFF']
// 26: (2) ['Dip B', 'constant 0xFD']