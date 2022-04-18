import {
  CIDS,
  KCODES,
} from "@webrcade/app-common"

import { BaseMapping } from "./base";

export class MkMapping extends BaseMapping {

  getName() { return "mk"; }

  getKeyboardMap() {
    const { emuInput } = this;
    return [{
      ...emuInput.KEYMAP_BASE_WITH_DPAD,
      [KCODES.Z]: emuInput.K_INP_B4,
      [KCODES.X]: emuInput.K_INP_B5,
      [KCODES.C]: emuInput.K_INP_B6,
      [KCODES.A]: emuInput.K_INP_B1,
      [KCODES.S]: emuInput.K_INP_B3,
      [KCODES.D]: emuInput.K_INP_B2,
    }];
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.X]: emuInput.INP_B1,      /* High punch */
      [CIDS.A]: emuInput.INP_B4,      /* Low punch */
      [CIDS.Y]: emuInput.INP_B3,      /* High Kick */
      [CIDS.B]: emuInput.INP_B5,      /* Low kick */
      [CIDS.LBUMP]: emuInput.INP_B2,  /* Block */
      [CIDS.RBUMP]: emuInput.INP_B6   /* Run */
    }
  }
}