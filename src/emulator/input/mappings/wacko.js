import { BaseMapping } from "./base";

export class WackoMapping extends BaseMapping {

  getName() { return "wacko"; }

  getAnalogToDpadMap() {
    return [1];
  }

  getRemapList() {
    return [
      ['P1 Up', 'switch 0x4102'],
      ['P1 Down', 'switch 0x4103'],
      ['P1 Left', 'switch 0x4100'],
      ['P1 Right', 'switch 0x4101'],
      // ['P1 Trackball X', 'slider 0x4000 0x4001 speed 0x800 center 10'],
      // ['P1 Trackball Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
      ['P1 Trackball X', 'joyaxis 0 0'],
      ['P1 Trackball Y', 'joyaxis 0 1']
    ]
  }
}
