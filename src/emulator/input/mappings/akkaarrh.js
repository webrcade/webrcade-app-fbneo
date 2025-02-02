import { CIDS } from '@webrcade/app-common';

import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class AkkaArrhMapping extends BaseMapping {
  getName() {
    return 'akkaarrh';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B3,
      [CIDS.RTRIG]: emuInput.INP_B3,
    };
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
        0,
        'P1 Trackball X',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'P1 Trackball Y',
        'slider 0x4002 0x4003 speed 0x800 center 10',
        emuInput.INP_UP | emuInput.INP_DOWN,
        'joyaxis 0 1',
        0,
        false,
      ),
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Coin 2', 'switch 0x07']
// 2: (2) ['Coin 3', 'switch 0x08']
// 3: (2) ['Start 1', 'switch 0x02']
// 4: (2) ['Start 2', 'switch 0x03']
// 5: (2) ['P1 Fire', 'switch 0x4080']
// 6: (2) ['P1 Power Blaster', 'switch 0x4081']
// 7: (2) ['P1 Zoom', 'switch 0x4082']
// 8: (2) ['P1 Trackball X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 9: (2) ['P1 Trackball Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 10: (2) ['Reset', 'switch 0x3D']
// length: 11
