import { BaseMapping } from "./base";

export class MinefieldMapping extends BaseMapping {

  getName() { return "minefld"; }

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
