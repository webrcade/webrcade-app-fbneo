import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class BuggyChallengeMapping extends BaseMapping {

  getName() { return "buggychl"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.Y]: emuInput.INP_B4,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.RTRIG]: emuInput.INP_B1,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B1,
    }
  }  

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, .5),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'Left/Right',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
    ];
  }

  getRemapList() {
    return [
      ['Throttle', 'slider 0x3D 0x4080 speed 0x800 center 10'],
      ['P1 Gear Shift', 'switch 0x4082']
    ];
  }

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P2 Coin', 'switch 0x07']
// 2: (2) ['P1 Start', 'switch 0x02']
// 3: (2) ['P1 Gear Shift', 'switch 0x4080']
// 4: (2) ['Left/Right', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 5: (2) ['Throttle', 'slider 0x2f 0x21 speed 0x800 center 10']
// 6: (2) ['Reset', 'switch 0x3D']
// 7: (2) ['Service', 'switch 0x0A']
// 8: (2) ['Test Button', 'switch 0x3C']
// 9: (2) ['Tilt', 'switch 0x14']
// 10: (2) ['Dip A', 'constant 0x7F']
// 11: (2) ['Dip B', 'constant 0x00']
// 12: (2) ['Dip C', 'constant 0xFF']