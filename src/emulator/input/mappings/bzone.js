import {
  CIDS,
  KCODES,
} from "@webrcade/app-common"

import { BaseMapping } from "./base";

export class BattleZoneMapping extends BaseMapping {

  getName() { return "bzone"; }

  getAnalogToDpadMap() {
    return [1];
  }

  getKeyboardMap() {
    const { emuInput } = this;

    return [{
      ...emuInput.KEYMAP_BASE,
      [KCODES.A]: emuInput.K_INP_UP,
      [KCODES.Z]: emuInput.K_INP_DOWN,
      [KCODES.S]: emuInput.K_INP_B1,
      [KCODES.X]: emuInput.K_INP_B1,
    }, {
      [KCODES.ARROW_UP]: emuInput.K_INP_UP,
      [KCODES.ARROW_DOWN]: emuInput.K_INP_DOWN,  
      [KCODES.D]: emuInput.K_INP_UP,
      [KCODES.C]: emuInput.K_INP_DOWN,
    }]
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B1,
      [CIDS.LBUMP]: emuInput.INP_B1,
      [CIDS.RBUMP]: emuInput.INP_B1,
      [CIDS.LTRIG]: emuInput.INP_B1,
      [CIDS.RTRIG]: emuInput.INP_B1,
    }
  }
}