import { BaseMapping } from "./base";

export class RescueMapping extends BaseMapping {

  getName() { return "rescue"; }

  getAnalogToDpadMap() {
    return [1];
  }

  getRemapList() {
    return [
      ["P1 Rght Stick Up", "switch 0x4102"],
      ["P1 Rght Stick Down", "switch 0x4103"],
      ["P1 Rght Stick Left", "switch 0x4100"],
      ["P1 Rght Stick Right", "switch 0x4101"],
    ]
  }
}
