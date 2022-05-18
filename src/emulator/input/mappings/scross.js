import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class StadiumCrossMapping extends BaseMapping {

  getName() { return "scross"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.Y]: emuInput.INP_B4,
      [CIDS.RBUMP]: emuInput.INP_UP,
      [CIDS.RTRIG]: emuInput.INP_UP,
      [CIDS.LBUMP]: emuInput.INP_B3,
      [CIDS.LTRIG]: emuInput.INP_B3,
    }
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 1),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Steering',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
    ];
  }

  getRemapList() {
    return [
      ['P1 Accelerate', 'slider 0x3C 0x4002 speed 0x800 center 10'],
      ['Dip A', "constant 0x0F"],
      ['Dip B', 'constant 0x01'],
    ];
  }

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Attack', 'switch 0x4080']
// 3: (2) ['P1 Wheelie', 'switch 0x4081']
// 4: (2) ['P1 Brake', 'switch 0x4082']
// 5: (2) ['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 6: (2) ['P1 Accelerate', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 7: (2) ['P2 Coin', 'switch 0x07']
// 8: (2) ['P2 Start', 'switch 0x03']
// 9: (2) ['P2 Attack', 'switch 0x4180']
// 10: (2) ['P2 Wheelie', 'switch 0x4181']
// 11: (2) ['P2 Brake', 'switch 0x4182']
// 12: (2) ['P2 Steering', 'joyslider 0 0 speed 0x800 center 10']
// 13: (2) ['P2 Accelerate', 'joyslider 0 1 speed 0x800 center 10']
// 14: (2) ['Reset', 'switch 0x3D']
// 15: (2) ['Service Mode', 'switch 0x3C']
// 16: (2) ['Service 1', 'switch 0x0A']
// 17: (2) ['Service 2', 'switch 0x0A']
// 18: (2) ['Service 3', 'switch 0x0A']
// 19: (2) ['Dip A', 'constant 0x0F']
// 20: (2) ['Dip B', 'constant 0x00']