import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class HangOnJrMapping extends BaseMapping {

  getName() { return "hangonjr"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_UP,
      [CIDS.RBUMP]: emuInput.INP_UP,
      [CIDS.RTRIG]: emuInput.INP_UP,
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
        0, 'P1 Steering',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
    ];
  }

  getRemapList() {
    return [
      ['P1 Accelerate', 'slider 0x3C 0x4002 speed 0x800 center 10'],
    ];
  }

  isAnalogDpadEnabled() { return false; }
}


// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 3: (2) ['P1 Accelerate', 'slider 0x2f 0x21 speed 0x800 center 10']
// 4: (2) ['Reset', 'switch 0x3D']
// 5: (2) ['Service', 'switch 0x0A']
// 6: (2) ['Service Mode', 'switch 0x3C']
// 7: (2) ['Dip A', 'constant 0xFF']
// 8: (2) ['Dip B', 'constant 0x14']