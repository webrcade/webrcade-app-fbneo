import { BaseMapping } from "./base";

export class LibbleRablleMapping extends BaseMapping {

  getName() { return "librabl"; }

  getAnalogToDpadMap() {
    return [2, 3];
  }
}