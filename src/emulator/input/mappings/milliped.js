import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class MillipedeMapping extends BaseMapping {
  getName() {
    return 'milliped';
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 0.45),
      new AnalogAdjustment(0, false, 0.45),
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

  getRemapList() {
    return [
      ['P2 Trackball X', 'joyaxis 1 0'],
      ['P2 Trackball Y', 'joyaxis 1 1'],
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Up', 'switch 0x4002']
// 3: (2) ['P1 Down', 'switch 0x4003']
// 4: (2) ['P1 Left', 'switch 0x4000']
// 5: (2) ['P1 Right', 'switch 0x4001']
// 6: (2) ['P1 Button 1', 'switch 0x4080']
// 7: (2) ['P1 Trackball X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 8: (2) ['P1 Trackball Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 9: (2) ['P2 Coin', 'switch 0x07']
// 10: (2) ['P2 Start', 'switch 0x03']
// 11: (2) ['P2 Up', 'switch 0x4102']
// 12: (2) ['P2 Down', 'switch 0x4103']
// 13: (2) ['P2 Left', 'switch 0x4100']
// 14: (2) ['P2 Right', 'switch 0x4101']
// 15: (2) ['P2 Button 1', 'switch 0x4180']
// 16: (2) ['P2 Trackball X', 'joyslider 0 0 speed 0x800 center 10']
// 17: (2) ['P2 Trackball Y', 'joyslider 0 1 speed 0x800 center 10']
// 18: (2) ['Reset', 'switch 0x3D']
// 19: (2) ['Service', 'switch 0x0A']
// 20: (2) ['Tilt', 'switch 0x14']
// 21: (2) ['Dip A', 'constant 0x04']
// 22: (2) ['Dip B', 'constant 0x00']
// 23: (2) ['Dip C', 'constant 0x80']
// 24: (2) ['Dip D', 'constant 0x04']
// 25: (2) ['Dip E', 'constant 0x02']
