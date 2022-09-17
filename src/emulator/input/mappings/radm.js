import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class RadMobileMapping extends BaseMapping {
  getName() {
    return 'radm';
  }

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
    };
  }

  getAnalogAdjustments() {
    return [new AnalogAdjustment(0, true, 1)];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 Steering',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
    ];
  }

  getRemapList() {
    return [
      ['P1 Accelerate', 'slider 0x3C 0x4002 speed 0x800 center 10'],
      ['P1 Brake', 'slider 0x3C 0x4003 speed 0x800 center 10'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

//
// Rad Mobile
//

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Headlights', 'switch 0x4080']
// 3: (2) ['P1 Wipers', 'switch 0x4081']
// 4: (2) ['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 5: (2) ['P1 Accelerate', 'slider 0x3c 0x4002 speed 0x800 center 10']
// 6: (2) ['P1 Brake', 'slider 0x3c 0x4003 speed 0x800 center 10']
// 7: (2) ['Reset', 'switch 0x3D']
// 8: (2) ['Service Mode', 'switch 0x3C']
// 9: (2) ['Service 1', 'switch 0x0A']
// 10: (2) ['Service 2', 'switch 0x0A']
// 11: (2) ['Service 3', 'switch 0x0A']
// 12: (2) ['Dip A', 'constant 0x0F']
// 13: (2) ['Dip B', 'constant 0x00']

//
// Rad Rally
//

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Shift', 'switch 0x4080']
// 3: (2) ['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['P1 Accelerate', 'slider 0x3c 0x4002 speed 0x800 center 10']
// 5: (2) ['P1 Brake', 'slider 0x3c 0x4003 speed 0x800 center 10']
// 6: (2) ['Reset', 'switch 0x3D']
// 7: (2) ['Service Mode', 'switch 0x0A']
// 8: (2) ['Service 1', 'switch 0x0A']
// 9: (2) ['Service 2', 'switch 0x0A']
// 10: (2) ['Service 3', 'switch 0x0A']
// 11: (2) ['Dip A', 'constant 0x0F']
// 12: (2) ['Dip B', 'constant 0x00']

//
// Slipstream
//

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Shift', 'switch 0x4080']
// 3: (2) ['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['P1 Accelerate', 'slider 0x3c 0x4002 speed 0x800 center 10']
// 5: (2) ['P1 Brake', 'slider 0x3c 0x4003 speed 0x800 center 10']
// 6: (2) ['Reset', 'switch 0x3D']
// 7: (2) ['Service Mode', 'switch 0x3C']
// 8: (2) ['Service 1', 'switch 0x0A']
// 9: (2) ['Service 2', 'switch 0x0A']
// 10: (2) ['Service 3', 'switch 0x0A']
// 11: (2) ['Dip A', 'constant 0x0F']
// 12: (2) ['Dip B', 'constant 0x00']

//
// F1 Super Lap
//

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Shift Up', 'switch 0x4080']
// 3: (2) ['P1 Shift Down', 'switch 0x4081']
// 4: (2) ['P1 Overtake', 'switch 0x4082']
// 5: (2) ['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 6: (2) ['P1 Accelerate', 'slider 0x3c 0x4002 speed 0x800 center 10']
// 7: (2) ['P1 Brake', 'slider 0x3c 0x4003 speed 0x800 center 10']
// 8: (2) ['Reset', 'switch 0x3D']
// 9: (2) ['Service Mode', 'switch 0x3C']
// 10: (2) ['Service 1', 'switch 0x0A']
// 11: (2) ['Service 2', 'switch 0x0A']
// 12: (2) ['Service 3', 'switch 0x0A']
// 13: (2) ['Dip A', 'constant 0x0F']

// F1 External Note

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Shift Up', 'switch 0x4080']
// 3: (2) ['P1 Shift Down', 'switch 0x4081']
// 4: (2) ['P1 Steering', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 5: (2) ['P1 Accelerate', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 6: (2) ['P1 Brake', 'slider 0x2f 0x21 speed 0x800 center 10']
// 7: (2) ['Reset', 'switch 0x3D']
// 8: (2) ['Service Mode', 'switch 0x3C']
// 9: (2) ['Service 1', 'switch 0x0A']
// 10: (2) ['Service 2', 'switch 0x0A']
// 11: (2) ['Service 3', 'switch 0x0A']
// 12: (2) ['Dip A', 'constant 0x0F']
// 13: (2) ['Dip B', 'constant 0x00']
