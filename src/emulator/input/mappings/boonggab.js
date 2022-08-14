import { AnalogAdjustment, BaseMapping } from './base';

export class BoongGaBoongGaMapping extends BaseMapping {
  getName() {
    return 'boonggab';
  }

  getAnalogAdjustments() {
    return [new AnalogAdjustment(1, true, 1)];
  }

  getRemapList() {
    return [['P1 Paddle', 'joyaxis 0 2']];
  }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Left', 'switch 0x4000']
// 3: (2) ['P1 Right', 'switch 0x4001']
// 4: (2) ['P1 Paddle', 'slider 0x2f 0x21 speed 0x800 center 10']
// 5: (2) ['P1 Button 1', 'switch 0x4080']
// 6: (2) ['P1 Button 2', 'switch 0x4081']
// 7: (2) ['P1 Button 3', 'switch 0x4082']
// 8: (2) ['P1 Button 4', 'switch 0x4083']
// 9: (2) ['P1 Button 5', 'switch 0x4084']
// 10: (2) ['P1 Button 6', 'switch 0x4085']
// 11: (2) ['P1 Button 7', 'switch 0x4086']
// 12: (2) ['Reset', 'switch 0x3D']
// 13: (2) ['Service 1', 'switch 0x0A']
// 14: (2) ['Service 2', 'switch 0x0A']
// 15: (2) ['Service Mode', 'switch 0x3C']
