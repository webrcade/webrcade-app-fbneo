import { BaseMapping } from './base';

export class ComplexXMapping extends BaseMapping {
  getName() {
    return 'complexx';
  }

  getAnalogToDpadMap() {
    return [1];
  }

  getRemapList() {
    return [
      ['P1 Right Stick Up', 'switch 0x4102'],
      ['P1 Right Stick Down', 'switch 0x4103'],
      ['P1 Right Stick Left', 'switch 0x4100'],
      ['P1 Right Stick Right', 'switch 0x4101'],
    ];
  }
}
