import { CIDS } from '@webrcade/app-common';

import { BaseMapping } from './base';

export class GunsmokeMapping extends BaseMapping {
  getName() {
    return 'gunsmoke';
  }

  getButtonMap() {
    const { emuInput } = this;
    return {
      ...emuInput.BUTTONMAP_BASE,
      [CIDS.X]: emuInput.INP_B1,
      [CIDS.A]: emuInput.INP_B2,
      [CIDS.Y]: emuInput.INP_B2,
      [CIDS.B]: emuInput.INP_B3,
    };
  }
}
