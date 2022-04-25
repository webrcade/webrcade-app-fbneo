import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class WildPilotMapping extends BaseMapping {

  getName() { return "wildplt"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.Y]: emuInput.INP_B3,
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B3,
      [CIDS.RTRIG]: emuInput.INP_B3,
    }
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 1),
      new AnalogAdjustment(0, false, 1),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Gun X',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
      new AnalogModeDetector(
        0, 'P1 Gun Y',
        'slider 0x4002 0x4003 speed 0x800 center 10', (emuInput.INP_UP | emuInput.INP_DOWN),
        'joyaxis 0 1', 0, false
      )
    ];
  }

  getRemapList() {
    return [
      ["P2 Gun X", "joyaxis 1 0"],
      ["P2 Gun Y", "joyaxis 1 1"],
    ];
  }

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Shot', 'switch 0x4080']
// 3: (2) ['P1 Missile', 'switch 0x4081']
// 4: (2) ['P1 Bomb', 'switch 0x4082']
// 5: (2) ['P1 Gun X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 6: (2) ['P1 Gun Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 7: (2) ['P2 Start', 'switch 0x03']
// 8: (2) ['P2 Shot', 'switch 0x4180']
// 9: (2) ['P2 Missile', 'switch 0x4181']
// 10: (2) ['P2 Bomb', 'switch 0x4182']
// 11: (2) ['P2 Gun X', 'joyslider 0 0 speed 0x800 center 10']
// 12: (2) ['P2 Gun Y', 'joyslider 0 1 speed 0x800 center 10']
// 13: (2) ['Reset', 'switch 0x3D']
// 14: (2) ['Service', 'switch 0x0A']
// 15: (2) ['Service Mode', 'switch 0x3C']
// 16: (2) ['Dip A', 'constant 0xFF']
// 17: (2) ['Dip B', 'constant 0xFF']