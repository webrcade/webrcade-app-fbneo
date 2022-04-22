import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class OmegaRaceMapping extends BaseMapping {

  getName() { return "omegrace"; }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, .45),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Spinner',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
    ];
  }

  getRemapList() {
    return [
      ["P2 Spinner", "joyaxis 1 0"],
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
// 6: (2) ['P1 Spinner', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 7: (2) ['P2 Coin', 'switch 0x07']
// 8: (2) ['P2 Start', 'switch 0x03']
// 9: (2) ['P2 Left', 'switch 0x4100']
// 10: (2) ['P2 Right', 'switch 0x4101']
// 11: (2) ['P2 Button 1', 'switch 0x4180']
// 12: (2) ['P2 Button 2', 'switch 0x4181']
// 13: (2) ['P2 Spinner', 'joyslider 0 0 speed 0x800 center 10']
// 14: (2) ['Reset', 'switch 0x3D']
// 15: (2) ['Service', 'switch 0x0A']
// 16: (2) ['Tilt', 'switch 0x14']
// 17: (2) ['Dip A', 'constant 0xFF']
// 18: (2) ['Dip B', 'constant 0xBF']
// 19: (2) ['Dip C', 'constant 0x80']
// 20: (2) ['Dip D', 'constant 0x00']