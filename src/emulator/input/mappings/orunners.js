import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class OutrunnersMapping extends BaseMapping {

  getName() { return "ourrunners"; }

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
      [CIDS.LBUMP]: emuInput.INP_DOWN,
      [CIDS.LTRIG]: emuInput.INP_DOWN,
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
      ['P1 Brake', 'slider 0x3C 0x4003 speed 0x800 center 10'],
      ['P1 Music +', 'undefined'],
      ['Dip A', "constant 0x0F"],
      ['Dip B', 'constant 0x01'],
    ];
  }

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Gear Up', 'switch 0x4080']
// 3: (2) ['P1 Gear Down', 'switch 0x4081']
// 4: (2) ['P1 Music', 'switch 0x4082']
// 5: (2) ['P1 Music -', 'switch 0x4083']
// 6: (2) ['P1 Music +', 'switch 0x4084']
// 7: (2) ['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 8: (2) ['P1 Accelerate', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 9: (2) ['P1 Brake', 'slider 0x2f 0x21 speed 0x800 center 10']
// 10: (2) ['P2 Coin', 'switch 0x07']
// 11: (2) ['P2 Start', 'switch 0x03']
// 12: (2) ['P2 Gear Up', 'switch 0x4180']
// 13: (2) ['P2 Gear Down', 'switch 0x4181']
// 14: (2) ['P2 Music', 'switch 0x4182']
// 15: (2) ['P2 Music -', 'switch 0x4183']
// 16: (2) ['P2 Music +', 'switch 0x4184']
// 17: (2) ['P2 Steering', 'joyslider 0 0 speed 0x800 center 10']zzz
// 18: (2) ['P2 Accelerate', 'joyslider 0 1 speed 0x800 center 10']
// 19: (2) ['P2 Brake', 'joyslider 0 2 speed 0x800 center 10']
// 20: (2) ['Reset', 'switch 0x3D']
// 21: (2) ['Service Mode', 'switch 0x3C']
// 22: (2) ['Service 1', 'switch 0x0A']
// 23: (2) ['Service 2', 'switch 0x0A']
// 24: (2) ['Service 3', 'switch 0x0A']
// 25: (2) ['Dip A', 'constant 0x0F']
// 26: (2) ['Dip B', 'constant 0x00']