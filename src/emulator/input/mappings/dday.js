import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class DDayMapping extends BaseMapping {
  getName() {
    return 'dday';
  }

  getAnalogAdjustments() {
    return [new AnalogAdjustment(0, true, 1)];
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
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Button 1', 'switch 0x4080']
// 3: (2) ['P1 X Axis', 'mouseaxis 0']
// 4: (2) ['Reset', 'switch 0x3D']
// 5: (2) ['Dip A', 'constant 0x81']
// 6: (2) ['Dip B', 'constant 0xFF']
