import {
  CIDS,
  KCODES,
} from "@webrcade/app-common"

import { BaseMapping } from "./base";

export class TutankhamMapping extends BaseMapping {

  getName() { return "tutankham"; }

  getKeyboardMap() {
    const { emuInput } = this;
    return [{
      ...emuInput.KEYMAP_BASE_WITH_DPAD,
      [KCODES.Z]: emuInput.K_INP_B2,
      [KCODES.X]: emuInput.K_INP_B3,
      [KCODES.C]: emuInput.K_INP_B1,
    }];
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.A]: emuInput.INP_B2,
      [CIDS.B]: emuInput.INP_B3,
      [CIDS.X]: emuInput.INP_B1,
    }
  }

  getRemapList() { 
    return [
      ["P1 Right Stick Left", "switch 0x4081"],
      ["P1 Right Stick Right", "switch 0x4082"],
      ["P2 Right Stick Left", "switch 0x4181"],
      ["P2 Right Stick Right", "switch 0x4182"],      
    ]
  }  
}