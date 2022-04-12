import {
  CIDS,
} from "@webrcade/app-common"

import { BaseMapping } from "./base";

export class FrontlineMapping extends BaseMapping {

  getName() { return "frontlin"; }

  getAnalogToDpadMap() {
    return [2, 3];
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.B]: emuInput.INP_B2,
      [CIDS.LBUMP]: emuInput.INP_B2,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B2,
      [CIDS.RTRIG]: emuInput.INP_B1,
    }
  }

  getRemapList() {
    return [
      ["P1 Rightstick Up", "switch 0x4202"],
      ["P1 Rightstick Down", "switch 0x4203"],
      ["P1 Rightstick Left", "switch 0x4200"],
      ["P1 Rightstick Right", "switch 0x4201"],
      ["P2 Rightstick Up", "switch 0x4302"],
      ["P2 Rightstick Down", "switch 0x4303"],
      ["P2 Rightstick Left", "switch 0x4300"],
      ["P2 Rightstick Right", "switch 0x4301"],
    ]
  }
}
