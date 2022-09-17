import { BaseMapping } from './base';

export class JoyfulRoadMapping extends BaseMapping {
  getName() {
    return 'joyfulr';
  }

  getRemapList() {
    return [
      ['P1 Right Stick Left', 'switch 0x4080'],
      ['P1 Right Stick Right', 'switch 0x4081'],
      ['P2 Right Stick Left', 'switch 0x4180'],
      ['P2 Right Stick Right', 'switch 0x4181'],
    ];
  }
}
