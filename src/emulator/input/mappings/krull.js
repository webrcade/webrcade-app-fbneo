import { BaseMapping } from "./base";

export class KrullMapping extends BaseMapping {

  getName() { return "krull"; }

  getAnalogToDpadMap() {
    return [1];
  }

  getRemapList() {
    return [
      ["Right Stick Up", "switch 0x4102"],
      ["Right Stick Down", "switch 0x4103"],
      ["Right Stick Left", "switch 0x4100"],
      ["Right Stick Right", "switch 0x4101"],
    ]
  }
}
