import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogModeDetector, BaseMapping } from "./base";

export class GrandPrixStarMapping extends BaseMapping {

  getName() { return "f1gpstar"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.Y]: emuInput.INP_B4,
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B1,
    }
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Steering',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      )
    ];
  }

  getRemapList() {
    return [
      ['P1 Gear Shift', 'switch 0x4082'],
      ['P1 Brake', 'switch 0x4081']    
    ]
  }  

  isAnalogDpadEnabled() { return false; }
}

// 0: (2)['P1 Coin', 'switch 0x06']
// 1: (2)['P1 Start', 'switch 0x02']
// 2: (2)['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 3: (2)['P1 Accelerator', 'switch 0x4080']
// 4: (2)['P1 Gear Shift', 'switch 0x4081']
// 5: (2)['P1 Brake', 'switch 0x4082']
// 6: (2)['Reset', 'switch 0x3D']
// 7: (2)['Service', 'switch 0x0A']
// 8: (2)['Service Mode', 'switch 0x3C']
// 9: (2)['Dip A', 'constant 0xFF']
// 10: (2)['Dip B', 'constant 0xFF']
// 11: (2)['Dip C', 'constant 0xFF']