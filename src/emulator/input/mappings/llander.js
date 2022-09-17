import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class LunarLanderMapping extends BaseMapping {
  getName() {
    return 'llander';
  }

  getAnalogAdjustments() {
    return [new AnalogAdjustment(1, false, 2)];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 Thrust',
        'slider 0x4080 0x4081 speed 0x800 center 10',
        emuInput.INP_B1 | emuInput.INP_B2,
        'joyaxis 0 3',
        1,
        false,
      ),
    ];
  }

  isAnalogDpadEnabled() {
    return true;
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Left', 'switch 0x4000']
// 3: (2) ['P1 Right', 'switch 0x4001']
// 4: (2) ['P1 Select Game', 'switch 0x03']
// 5: (2) ['P1 Abort', 'switch 0x04']
// 6: (2) ['P1 Thrust', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 7: (2) ['Reset', 'switch 0x3D']
// 8: (2) ['Diag Step', 'switch 0x0B']
// 9: (2) ['Tilt', 'switch 0x14']
// 10: (2) ['Dip A', 'constant 0x80']
// 11: (2) ['Dip B', 'constant 0x02']
// 12: (2) ['Dip C', 'constant 0x00']
// 13: (2) ['Dip D', 'constant 0x00']
