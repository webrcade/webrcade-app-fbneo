import { BaseMapping } from "./base";

export class TitleFightMapping extends BaseMapping {

  getName() { return "titlef"; }

  getAnalogToDpadMap() {
    return [2, 3];
  }

  getRemapList() {
    return [
      ["Dip B", "constant 0x01"], // Single screen
    ]
  }
}
