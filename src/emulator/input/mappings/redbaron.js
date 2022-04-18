import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class RedBaronMapping extends BaseMapping {

  getName() { return "redbaron"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B1,
      [CIDS.X]: emuInput.INP_B1,
      [CIDS.Y]: emuInput.INP_B1,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B1,
      [CIDS.RTRIG]: emuInput.INP_B1,
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
        0, 'P1 Stick X',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
      new AnalogModeDetector(
        0, 'P1 Stick Y',
        'slider 0x4002 0x4003 speed 0x800 center 10', (emuInput.INP_UP | emuInput.INP_DOWN),
        'joyaxis 0 1', 0, false
      )
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
// 7: (2) ['P1 Stick X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 8: (2) ['P1 Stick Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 9: (2) ['Reset', 'switch 0x3D']
// 10: (2) ['Diagnostic Step', 'switch 0x0B']
// 11: (2) ['Dip A', 'constant 0xFD']
// 12: (2) ['Dip B', 'constant 0xE7']
// 13: (2) ['Dip C', 'constant 0x10']
// 14: (2) ['Dip D', 'constant 0x00']