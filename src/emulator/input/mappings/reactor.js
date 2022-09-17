import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class ReactorMapping extends BaseMapping {
  getName() {
    return 'reactor';
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 0.3),
      new AnalogAdjustment(0, false, 0.3),
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

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Trackball X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 3: (2) ['P1 Trackball Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 4: (2) ['P1 Button 1', 'switch 0x4080']
// 5: (2) ['P1 Button 2', 'switch 0x4081']
// 6: (2) ['Reset', 'switch 0x3D']
// 7: (2) ['Select', 'switch 0x3C']
// 8: (2) ['Dip A', 'constant 0xFF']
// 9: (2) ['Dip B', 'constant 0x02']
