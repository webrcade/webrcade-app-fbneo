import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class MetalHawkMapping extends BaseMapping {
  getName() {
    return 'metlhawk';
  }

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
    };
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 2),
      new AnalogAdjustment(0, false, 2),
      new AnalogAdjustment(1, false, 1),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 X Axis',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'P1 Y Axis',
        'slider 0x4002 0x4003 speed 0x800 center 10',
        emuInput.INP_UP | emuInput.INP_DOWN,
        'joyaxis 0 1',
        0,
        false,
      ),
    ];
  }

  getRemapList() {
    return [['P1 Up/Down Axis', 'joyaxis 0 3']];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Button 1', 'switch 0x4080']
// 3: (2) ['P1 Button 2', 'switch 0x4081']
// 4: (2) ['P1 X Axis', 'mouseaxis 0']
// 5: (2) ['P1 Y Axis', 'mouseaxis 1']
// 6: (2) ['P1 Up/Down Axis', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 7: (2) ['Reset', 'switch 0x3D']
// 8: (2) ['Service', 'switch 0x0A']
// 9: (2) ['Dip A', 'constant 0xFF']
// 10: (2) ['Debug', 'constant 0xFF']
