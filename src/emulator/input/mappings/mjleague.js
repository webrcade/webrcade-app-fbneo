import { AnalogAdjustment, BaseMapping } from "./base";

export class MajorLeagueMapping extends BaseMapping {

  getName() { return "mjleague"; }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(1, true, 1),
      new AnalogAdjustment(1, false, 1),
    ];
  }

  getRemapList() {
    return [
      ["P1 Bat Swing", "joyaxis 0 3"],
      ["P2 Bat Swing", "joyaxis 1 3"],
    ];
  }
}

// 0: (2) ['Coin 1', 'switch 0x06']
// 1: (2) ['Start 1', 'switch 0x02']
// 2: (2) ['Coin 2', 'switch 0x07']
// 3: (2) ['Start 2', 'switch 0x03']
// 4: (2) ['P1 Up', 'switch 0x4002']
// 5: (2) ['P1 Down', 'switch 0x4003']
// 6: (2) ['P1 Left', 'switch 0x4000']
// 7: (2) ['P1 Right', 'switch 0x4001']
// 8: (2) ['P1 Fire 1', 'switch 0x4080']
// 9: (2) ['P1 Fire 2', 'switch 0x4081']
// 10: (2) ['P1 Fire 3', 'switch 0x4082']
// 11: (2) ['P1 Fire 4', 'switch 0x4083']
// 12: (2) ['P1 Fire 5', 'switch 0x4084']
// 13: (2) ['P1 Bat Swing', 'slider 0x2f 0x21 speed 0x800 center 10']
// 14: (2) ['P2 Up', 'switch 0x4102']
// 15: (2) ['P2 Down', 'switch 0x4103']
// 16: (2) ['P2 Left', 'switch 0x4100']
// 17: (2) ['P2 Right', 'switch 0x4101']
// 18: (2) ['P2 Fire 1', 'switch 0x4180']
// 19: (2) ['P2 Fire 2', 'switch 0x4181']
// 20: (2) ['P2 Fire 3', 'switch 0x4182']
// 21: (2) ['P2 Fire 4', 'switch 0x4183']
// 22: (2) ['P2 Fire 5', 'switch 0x4184']
// 23: (2) ['P2 Bat Swing', 'joyslider 0 2 speed 0x800 center 10']
// 24: (2) ['Service', 'switch 0x0A']
// 25: (2) ['Diagnostics', 'switch 0x3C']
// 26: (2) ['Reset', 'switch 0x3D']
// 27: (2) ['Dip 1', 'constant 0xFF']
// 28: (2) ['Dip 2', 'constant 0xF0']