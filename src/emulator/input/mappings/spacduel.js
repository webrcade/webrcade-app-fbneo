import { BaseMapping } from "./base";

export class SpaceDuelMapping extends BaseMapping {

  getName() { return "spacduel"; }

  getRemapList() {
    return [
      ["P1 Select", "switch 0x4083"],
    ]
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Select', 'switch 0x03']
// 3: (2) ['P1 Left', 'switch 0x4000']
// 4: (2) ['P1 Right', 'switch 0x4001']
// 5: (2) ['P1 Button 1', 'switch 0x4080']
// 6: (2) ['P1 Button 2', 'switch 0x4081']
// 7: (2) ['P1 Button 3', 'switch 0x4082']
// 8: (2) ['P2 Coin', 'switch 0x07']
// 9: (2) ['P2 Left', 'switch 0x4100']
// 10: (2) ['P2 Right', 'switch 0x4101']
// 11: (2) ['P2 Button 1', 'switch 0x4180']
// 12: (2) ['P2 Button 2', 'switch 0x4181']
// 13: (2) ['P2 Button 3', 'switch 0x4182']
// 14: (2) ['Reset', 'switch 0x3D']
// 15: (2) ['Diagnostic Step', 'switch 0x0B']
// 16: (2) ['Dip A', 'constant 0x01']
// 17: (2) ['Dip B', 'constant 0x00']
// 18: (2) ['Dip C', 'constant 0x07']
// 19: (2) ['Dip D', 'constant 0x10']
// 20: (2) ['Dip E', 'constant 0x00']