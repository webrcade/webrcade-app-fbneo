import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class ActionFighterMapping extends BaseMapping {

  getName() { return "afighterb"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.Y]: emuInput.INP_B4,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B2,
      [CIDS.LTRIG]: emuInput.INP_B3,
      [CIDS.RTRIG]: emuInput.INP_B4,
    }
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, -.4),
      new AnalogAdjustment(1, false, 2),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'Steering',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
    ];
  }

  getRemapList() {
    return [
      ["Accelerate", "joyaxis 0 3"],
    ];
  }

  isAnalogDpadEnabled() { return false; }
}


// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Start 1', 'switch 0x02']
// 2: (2) ['Coin 2', 'switch 0x07']
// 3: (2) ['Start 2', 'switch 0x03']
// 4: (2) ['Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 5: (2) ['Accelerate', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 6: (2) ['P1 Fire 1', 'switch 0x4081']
// 7: (2) ['P1 Fire 2', 'switch 0x4082']
// 8: (2) ['P1 Fire 3', 'switch 0x4083']
// 9: (2) ['P1 Fire 4', 'switch 0x4084']
// 10: (2) ['Service', 'switch 0x0A']
// 11: (2) ['Diagnostics', 'switch 0x3C']
// 12: (2) ['Reset', 'switch 0x3D']
// 13: (2) ['Dip 1', 'constant 0xFF']
// 14: (2) ['Dip 2', 'constant 0xFC']