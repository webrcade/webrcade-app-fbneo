import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class WorldClassBowlingDeluxeMapping extends BaseMapping {
  getName() {
    return 'wcbowldx';
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 0.6),
      new AnalogAdjustment(0, false, 0.6),
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
// 2: (2) ['P1 Trackball X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 3: (2) ['P1 Trackball Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 4: (2) ['P1 Button 1', 'switch 0x4080']
// 5: (2) ['P1 Button 2', 'switch 0x4081']
// 6: (2) ['P2 Coin', 'switch 0x07']
// 7: (2) ['P2 Start', 'switch 0x03']
// 8: (2) ['P2 Trackball X', 'joyslider 0 0 speed 0x800 center 10']
// 9: (2) ['P2 Trackball Y', 'joyslider 0 1 speed 0x800 center 10']
// 10: (2) ['P2 Button 1', 'switch 0x4180']
// 11: (2) ['P2 Button 2', 'switch 0x4181']
// 12: (2) ['Reset', 'switch 0x3D']
// 13: (2) ['Service', 'switch 0x0A']
// 14: (2) ['Service Mode', 'switch 0x3C']
// 15: (2) ['Dip A', 'constant 0x07']
