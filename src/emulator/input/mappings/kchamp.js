import { BaseMapping } from "./base";

export class KarateChampMapping extends BaseMapping {

  getName() { return "kchamp"; }

  getAnalogToDpadMap() {
    return [2, 3];
  }
}