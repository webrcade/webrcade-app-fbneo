import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class GlocR360Mapping extends BaseMapping {

  getName() { return "glocr360"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B1,
    }
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 1),
      new AnalogAdjustment(0, false, 1),
      new AnalogAdjustment(1, true, 1),
      new AnalogAdjustment(1, false, 1),
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
      new AnalogModeDetector(
        0, 'Up/Down',
        'slider 0x4002 0x4003 speed 0x800 center 10', (emuInput.INP_UP | emuInput.INP_DOWN),
        'joyaxis 0 1', 0, false
      )
    ];
  }

  getRemapList() {
    return [
      ["Moving Roll", "joyaxis 0 2"],
      ["Moving Pitch", "joyaxis 0 3"],
    ];
  }

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Start 1', 'switch 0x02']
// 2: (2) ['Coin 2', 'switch 0x07']
// 3: (2) ['Left/Right', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['Up/Down', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 5: (2) ['Moving Roll', 'joyslider 0 0 speed 0x800 center 10']
// 6: (2) ['Moving Pitch', 'joyslider 1 0 speed 0x800 center 10']
// 7: (2) ['Fire 1', 'switch 0x4080']
// 8: (2) ['Fire 2', 'switch 0x4081']
// 9: (2) ['Service', 'switch 0x0A']
// 10: (2) ['Diagnostics', 'switch 0x3C']
// 11: (2) ['Reset', 'switch 0x3D']
// 12: (2) ['Dip 1', 'constant 0xF3']
// 13: (2) ['Dip 2', 'constant 0xFF']