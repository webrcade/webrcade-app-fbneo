import { BaseMapping } from "./base";

export class AngelKidsMapping extends BaseMapping {

  getName() { return "angelkds"; }

  getAnalogToDpadMap() {
    return [2, 3];
  }

  getRemapList() {
    return [
      ['P1 Left Stick Up', 'switch 0x4002'],
      ['P1 Left Stick Down', 'switch 0x4003'],
      ['P1 Left Stick Left', 'switch 0x4000'],
      ['P1 Left Stick Right', 'switch 0x4001'],
      ['P1 Right Stick Up', 'switch 0x4202'],
      ['P1 Right Stick Down', 'switch 0x4203'],
      ['P1 Right Stick Left', 'switch 0x4200'],
      ['P1 Right Stick Right', 'switch 0x4201'],
      ['P2 Left Stick Up', 'switch 0x4102'],
      ['P2 Left Stick Down', 'switch 0x4103'],
      ['P2 Left Stick Left', 'switch 0x4100'],
      ['P2 Left Stick Right', 'switch 0x4101'],
      ['P2 Right Stick Up', 'switch 0x4202'],
      ['P2 Right Stick Down', 'switch 0x4203'],
      ['P2 Right Stick Left', 'switch 0x4200'],
      ['P2 Right Stick Right', 'switch 0x4201']
    ]
  }
}
