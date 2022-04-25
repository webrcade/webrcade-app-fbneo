import {
  CIDS,
} from "@webrcade/app-common"

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class ThunderCeptorMapping extends BaseMapping {

  getName() { return "tceptor"; }

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
      [CIDS.LTRIG]: emuInput.INP_B4,
      [CIDS.RTRIG]: emuInput.INP_B3,
    }
  }  

  getAnalogAdjustments() { 
    return [
      new AnalogAdjustment(0, true, 1),
      new AnalogAdjustment(0, false, 1),
      new AnalogAdjustment(1, false, -1),
    ];  
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 X Axis',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
      new AnalogModeDetector(
        0, 'P1 Y Axis',
        'slider 0x4002 0x4003 speed 0x800 center 10', (emuInput.INP_UP | emuInput.INP_DOWN),
        'joyaxis 0 1', 0, false
      ),
      new AnalogModeDetector(
        0, 'P1 Accelerator', 
        'slider 0x4084 0x4085 speed 0x800 center 10', (emuInput.INP_B5 | emuInput.INP_B6),
        'joyaxis 0 3', 1, false
      )
    ];
  }

  isAnalogDpadEnabled() { return false; }
}


// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 X Axis', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 2: (2) ['P1 Y Axis', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 3: (2) ['P1 Accelerator', 'slider 0x2f 0x21 speed 0x800 center 10']
// 4: (2) ['P1 Button 1', 'switch 0x4080']
// 5: (2) ['P1 Button 2', 'switch 0x4081']
// 6: (2) ['P1 Button 3', 'switch 0x4082']
// 7: (2) ['P1 Button 4', 'switch 0x4083']
// 8: (2) ['Reset', 'switch 0x3D']
// 9: (2) ['Service', 'switch 0x0A']
// 10: (2) ['Dip A', 'constant 0xFF']
// 11: (2) ['Dip B', 'constant 0xFB']
// 12: (2) ['Dip C', 'constant 0x04']