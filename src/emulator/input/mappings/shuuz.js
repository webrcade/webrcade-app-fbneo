import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class ShuuzMapping extends BaseMapping {
  getName() {
    return 'shuuz';
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

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Button 1', 'switch 0x4080']
// 2: (2) ['P1 Button 2', 'switch 0x4081']
// 3: (2) ['P1 Trackball X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['P1 Trackball Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 5: (2) ['Reset', 'switch 0x3D']
// 6: (2) ['Dip A', 'constant 0x08']
