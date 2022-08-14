import { CIDS, KCODES } from '@webrcade/app-common';

import { BaseMapping } from './base';

export class Sf2Mapping extends BaseMapping {
  getName() {
    return 'sf2';
  }

  getKeyboardMap() {
    const { emuInput } = this;
    return [
      {
        ...emuInput.KEYMAP_BASE_WITH_DPAD,
        [KCODES.Z]: emuInput.K_INP_B4,
        [KCODES.X]: emuInput.K_INP_B5,
        [KCODES.C]: emuInput.K_INP_B6,
        [KCODES.A]: emuInput.K_INP_B1,
        [KCODES.S]: emuInput.K_INP_B2,
        [KCODES.D]: emuInput.K_INP_B3,
      },
    ];
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.X]: emuInput.INP_B1 /* Light punch */,
      [CIDS.A]: emuInput.INP_B4 /* Light kick */,
      [CIDS.Y]: emuInput.INP_B2 /* Medium punch */,
      [CIDS.B]: emuInput.INP_B5 /* Medium kick */,
      [CIDS.LBUMP]: emuInput.INP_B3 /* Hard punch */,
      [CIDS.RBUMP]: emuInput.INP_B6 /* Hard kick */,
    };
  }
}
