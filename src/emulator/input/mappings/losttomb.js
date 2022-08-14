import { BaseMapping } from './base';

export class LostTombMapping extends BaseMapping {
  getName() {
    return 'losttomb';
  }

  getAnalogToDpadMap() {
    return [1];
  }

  getRemapList() {
    return [
      ['Right Up', 'switch 0x4102'],
      ['Right Down', 'switch 0x4103'],
      ['Right Left', 'switch 0x4100'],
      ['Right Right', 'switch 0x4101'],
    ];
  }
}
