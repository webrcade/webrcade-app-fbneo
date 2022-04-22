import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class GoindolMapping extends BaseMapping {

  getName() { return "goindol"; }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 1),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Paddle',
        'slider 0x4082 0x4083 speed 0x800 center 10', (emuInput.INP_B3 | emuInput.INP_B4),
        'joyaxis 0 0', 0, true
      ),
    ];
  }

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Left', 'switch 0x4000']
// 3: (2) ['P1 Right', 'switch 0x4001']
// 4: (2) ['P1 Button 1', 'switch 0x4080']
// 5: (2) ['P1 Button 2', 'switch 0x4081']
// 6: (2) ['P1 Paddle', 'slider 0x2f 0x21 speed 0x800 center 10']
// 7: (2) ['P2 Coin', 'switch 0x07']
// 8: (2) ['P2 Start', 'switch 0x03']
// 9: (2) ['P2 Left', 'switch 0x4100']
// 10: (2) ['P2 Right', 'switch 0x4101']
// 11: (2) ['P2 Button 1', 'switch 0x4180']
// 12: (2) ['P2 Button 2', 'switch 0x4181']
// 13: (2) ['Reset', 'switch 0x3D']
// 14: (2) ['Dip A', 'constant 0xCE']
// 15: (2) ['Dip B', 'constant 0xC7']