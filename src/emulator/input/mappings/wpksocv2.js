import { BaseMapping } from './base';

export class WorldPkSoccerV2Mapping extends BaseMapping {
  getName() {
    return 'wpksocv2';
  }

  getRemapList() {
    return [
      ['P1 Kick', 'joyaxis 0 3'],
      ['P1 Select', 'switch 0x4080'],
    ];
  }
}

//   0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Select', 'switch 0x04']
// 3: (2) ['P1 Up', 'switch 0x4002']
// 4: (2) ['P1 Down', 'switch 0x4003']
// 5: (2) ['P1 Left', 'switch 0x4000']
// 6: (2) ['P1 Right', 'switch 0x4001']
// 7: (2) ['P1 Kick', 'slider 0x2f 0x21 speed 0x800 center 10']
// 8: (2) ['P2 Coin', 'switch 0x07']
// 9: (2) ['Reset', 'switch 0x3D']
// 10: (2) ['Service', 'switch 0x0A']
// 11: (2) ['Service Mode', 'switch 0x3C']
// 12: (2) ['Dip A', 'constant 0xFF']
// 13: (2) ['Dip B', 'constant 0xFF']
// 14: (2) ['Dip C', 'constant 0x5F']
// 15: (2) ['Dip D', 'constant 0xFF']
