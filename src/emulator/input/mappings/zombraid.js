import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class ZombieRaidMapping extends BaseMapping {

  getName() { return "zombraid"; }

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
      new AnalogAdjustment(0, true, 2),
      new AnalogAdjustment(0, false, 2),
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
      new AnalogModeDetector(
        0, 'P1 Up / Down',
        'slider 0x4002 0x4003 speed 0x800 center 10', (emuInput.INP_UP | emuInput.INP_DOWN),
        'joyaxis 0 1', 0, false
      )
    ];
  }

  getRemapList() {
    return [
      ["P2 Right / left", "joyaxis 1 0"],
      ["P2 Up / Down", "joyaxis 1 1"],
      ['P1 Button 1', 'switch 0x4080'],
      ['P1 Button 2', 'switch 0x4081']
    ];
  }

  isAnalogDpadEnabled() { return false; }
}


// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Button 1', 'switch 0x8080']
// 3: (2) ['P1 Button 2', 'switch 0x8081']
// 4: (2) ['P1 Right / left', 'mouseaxis 0']
// 5: (2) ['P1 Up / Down', 'mouseaxis 1']
// 6: (2) ['P2 Coin', 'switch 0x07']
// 7: (2) ['P2 Start', 'switch 0x03']
// 8: (2) ['P2 Button 1', 'switch 0x4180']
// 9: (2) ['P2 Button 2', 'switch 0x4181']
// 10: (2) ['P2 Right / left', 'joyslider 0 0 speed 0x800 center 10']
// 11: (2) ['P2 Up / Down', 'joyslider 0 1 speed 0x800 center 10']
// 12: (2) ['Reset', 'switch 0x3D']
// 13: (2) ['Service', 'switch 0x0A']
// 14: (2) ['Dip A', 'constant 0xFD']
// 15: (2) ['Dip B', 'constant 0xFF']
// 16: (2) ['Dip C', 'constant 0xFF']