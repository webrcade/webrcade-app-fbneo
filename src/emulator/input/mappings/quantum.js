import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class QuantumMapping extends BaseMapping {
  getName() {
    return 'quantum';
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 0.75),
      new AnalogAdjustment(0, false, 0.75),
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

// 0: (2)['P1 Coin', 'switch 0x06']
// 1: (2)['P1 Start', 'switch 0x02']
// 2: (2)['P1 Up', 'switch 0x4002']
// 3: (2)['P1 Down', 'switch 0x4003']
// 4: (2)['P1 Left', 'switch 0x4000']
// 5: (2)['P1 Right', 'switch 0x4001']
// 6: (2)['P1 Trackball X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 7: (2)['P1 Trackball Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 8: (2)['P2 Start', 'switch 0x03']
// 9: (2)['P2 Coin', 'switch 0x07']
// 10: (2)['P3 Coin', 'switch 0x08']
// 11: (2)['Reset', 'switch 0x3D']
// 12: (2)['Dip A', 'constant 0x00']
// 13: (2)['Dip B', 'constant 0x80']
// 14: (2)['Dip C', 'constant 0x00']
