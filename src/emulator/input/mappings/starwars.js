import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class StarWarsMapping extends BaseMapping {

  getName() { return "starwars"; }

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
      new AnalogAdjustment(0, true, 5),
      new AnalogAdjustment(0, false, 5),
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

  // getRemapList() {
  //   return [
  //     ["Dip A", "constant 0xB3"],
  //     ["Dip D", "constant 0x10"],
  //   ];
  // }  

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P2 Coin', 'switch 0x07']
// 2: (2) ['P1 Button 1', 'switch 0x4080']
// 3: (2) ['P1 Button 2', 'switch 0x4081']
// 4: (2) ['P1 Button 3', 'switch 0x4082']
// 5: (2) ['P1 Button 4', 'switch 0x4083']
// 6: (2) ['P1 Stick X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 7: (2) ['P1 Stick Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 8: (2) ['Reset', 'switch 0x3D']
// 9: (2) ['Service', 'switch 0x0A']
// 10: (2) ['Diag. Step', 'switch 0x0B']
// 11: (2) ['Tilt', 'switch 0x14']
// 12: (2) ['Dip A', 'constant 0x96']
// 13: (2) ['Dip B', 'constant 0x02']
// 14: (2) ['Dip C', 'constant 0x10']
// 15: (2) ['Dip D', 'constant 0x00']