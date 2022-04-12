import {
  CIDS,
} from "@webrcade/app-common"

import { BaseMapping } from "./base";

export class SargeMapping extends BaseMapping {

  getName() { return "sarge"; }

  getAnalogToDpadMap() {
    return [2, 3];
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B2,
      [CIDS.B]: emuInput.INP_B1,      
      [CIDS.X]: emuInput.INP_START,      
      [CIDS.Y]: emuInput.INP_START,      
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B2,
      [CIDS.LTRIG]: emuInput.INP_B1,
      [CIDS.RTRIG]: emuInput.INP_B2,
    }
  }

  getRemapList() {
    return [
      ["P1 Right Stick Up", "switch 0x4202"],
      ["P1 Right Stick Down", "switch 0x4203"],
      ["P2 Right Stick Up", "switch 0x4302"],
      ["P2 Right Stick Down", "switch 0x4303"],
    ]
  }
}
