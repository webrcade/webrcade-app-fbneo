import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class ScudHammerMapping extends BaseMapping {

  getName() { return "scudhamm"; }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 1),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Hit',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
    ];
  }

  getRemapList() {
    return [
      ['P1 Select', 'switch 0x4083'],
    ];
  }

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Select', 'switch 0x03']
// 3: (2) ['P1 Rock', 'switch 0x4080']
// 4: (2) ['P1 Scissors', 'switch 0x4081']
// 5: (2) ['P1 Paper', 'switch 0x4082']
// 6: (2) ['P1 Hit', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 7: (2) ['Reset', 'switch 0x3D']
// 8: (2) ['Service', 'switch 0x0A']
// 9: (2) ['Service Mode', 'switch 0x3C']
// 10: (2) ['Tilt', 'switch 0x14']
// 11: (2) ['Dip A', 'constant 0x3F']
// 12: (2) ['Dip B', 'constant 0x07']