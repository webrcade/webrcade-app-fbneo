import { AnalogAdjustment, BaseMapping } from "./base";

export class LordOfGunMapping extends BaseMapping {

  getName() { return "lordgun"; }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 1.5),
      new AnalogAdjustment(0, false, 1.5),
    ];
  }

  getRemapList() {
    return [
      ["P1 Right / left", "joyaxis 0 0"],
      ["P1 Up / Down", "joyaxis 0 1"],
      ['P1 Button 1', 'switch 0x4080'],
      ["P2 Right / left", "joyaxis 1 0"],
      ["P2 Up / Down", "joyaxis 1 1"],
      ['P2 Button 1', 'switch 0x4180'],
    ]
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Right / left', 'mouseaxis 0']
// 3: (2) ['P1 Up / Down', 'mouseaxis 1']
// 4: (2) ['P1 Button 1', 'switch 0x8080']
// 5: (2) ['P2 Coin', 'switch 0x07']
// 6: (2) ['P2 Start', 'switch 0x03']
// 7: (2) ['P2 Right / left', 'mouseaxis 0']
// 8: (2) ['P2 Up / Down', 'mouseaxis 1']
// 9: (2) ['P2 Button 1', 'switch 0x8080']
// 10: (2) ['Reset', 'switch 0x3D']
// 11: (2) ['Service', 'switch 0x0A']
// 12: (2) ['Service', 'switch 0x0A']
// 13: (2) ['Dip A', 'constant 0x7F']