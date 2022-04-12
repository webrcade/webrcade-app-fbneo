import { BaseMapping } from "./base";

export class SmashTvMapping extends BaseMapping {

  getName() { return "smashtv"; }

  getAnalogToDpadMap() {
    return [2, 3];
  }
}