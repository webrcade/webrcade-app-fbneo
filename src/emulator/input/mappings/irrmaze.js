import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, BaseMapping } from './base';

export class IrritatingMazeMapping extends BaseMapping {
  getName() {
    return 'irrmaze';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B2,
    };
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 0.75),
      new AnalogAdjustment(0, false, 0.75),
    ];
  }

  getRemapList() {
    return [
      ['P1 X Axis', 'joyaxis 0 0'],
      ['P1 Y Axis', 'joyaxis 0 1'],
      ['P1 Button A', 'switch 0x4080'],
      ['P1 Button B', 'switch 0x4081'],
    ];
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 X Axis', 'mouseaxis 0']
// 3: (2) ['P1 Y Axis', 'mouseaxis 1']
// 4: (2) ['P1 Button A', 'switch 0x8080']
// 5: (2) ['P1 Button B', 'switch 0x8081']
// 6: (2) ['P2 Coin', 'switch 0x07']
// 7: (2) ['P2 Start', 'switch 0x03']
// 8: (2) ['P2 Button A', 'switch 0x4180']
// 9: (2) ['P2 Button B', 'switch 0x4181']
// 10: (2) ['Reset', 'switch 0x3D']
// 11: (2) ['Test', 'switch 0x3C']
// 12: (2) ['Service', 'switch 0x0A']
// 13: (2) ['Dip 1', 'constant 0x00']
// 14: (2) ['Dip 2', 'constant 0x00']
// 15: (2) ['System', 'constant 0x86']
// 16: (2) ['Slots', 'constant 0x01']
// 17: (2) ['Debug Dip 1', 'constant 0x00']
// 18: (2) ['Debug Dip 2', 'constant 0x00']
