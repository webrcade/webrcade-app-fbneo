import { BaseMapping } from './base';

export class SpaceDungeonMapping extends BaseMapping {
  getName() {
    return 'sdungeon';
  }

  getAnalogToDpadMap() {
    return [2, 3];
  }

  getRemapList() {
    return [
      ['P1 Right Stick Up', 'switch 0x4202'],
      ['P1 Right Stick Down', 'switch 0x4203'],
      ['P1 Right Stick Left', 'switch 0x4200'],
      ['P1 Right Stick Right', 'switch 0x4201'],
      ['P2 Right Stick Up', 'switch 0x4302'],
      ['P2 Right Stick Down', 'switch 0x4303'],
      ['P2 Right Stick Left', 'switch 0x4300'],
      ['P2 Right Stick Right', 'switch 0x4301'],
    ];
  }
}
