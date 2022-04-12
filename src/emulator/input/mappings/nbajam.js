import {
  CIDS,
} from "@webrcade/app-common"

import { BaseMapping } from "./base";

export class NbaJamMapping extends BaseMapping {

  getName() { return "nbajam"; }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.X]: emuInput.INP_B3,
      [CIDS.A]: emuInput.INP_B2,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B1,
    }
  }
}