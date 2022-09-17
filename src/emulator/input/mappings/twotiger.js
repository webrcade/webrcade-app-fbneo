import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class TwoTigersMapping extends BaseMapping {
  getName() {
    return 'twotiger';
  }

  getAnalogAdjustments() {
    return [new AnalogAdjustment(0, true, 1)];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 Stick X',
        'slider 0x4000 0x4001 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
    ];
  }

  getRemapList() {
    return [['P2 Stick X', 'joyaxis 1 0']];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 & P2 Dogfight Start', 'switch 0x04']
// 3: (2) ['P1 Button 1', 'switch 0x4080']
// 4: (2) ['P1 Button 2', 'switch 0x4081']
// 5: (2) ['P1 Button 3', 'switch 0x4082']
// 6: (2) ['P1 Stick X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 7: (2) ['P2 Coin', 'switch 0x07']
// 8: (2) ['P2 Start', 'switch 0x03']
// 9: (2) ['P2 Button 1', 'switch 0x4180']
// 10: (2) ['P2 Button 2', 'switch 0x4181']
// 11: (2) ['P2 Button 3', 'switch 0x4182']
// 12: (2) ['P2 Stick X', 'joyslider 0 0 speed 0x800 center 10']
// 13: (2) ['Reset', 'switch 0x3D']
// 14: (2) ['Service', 'switch 0x0A']
// 15: (2) ['Tilt', 'switch 0x14']
// 16: (2) ['Dip A', 'constant 0xFC']
// 17: (2) ['Dip B', 'constant 0x80']
