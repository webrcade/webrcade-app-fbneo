import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class BlasterMapping extends BaseMapping {

  getName() { return "blaster"; }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 1),
      new AnalogAdjustment(0, false, 1),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Stick X',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
      new AnalogModeDetector(
        0, 'P1 Stick Y',
        'slider 0x4002 0x4003 speed 0x800 center 10', (emuInput.INP_UP | emuInput.INP_DOWN),
        'joyaxis 0 1', 0, false
      )
    ];
  }

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Button 1', 'switch 0x4080']
// 3: (2) ['P1 Button 2', 'switch 0x4081']
// 4: (2) ['P1 Button 3', 'switch 0x4082']
// 5: (2) ['P1 Stick X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 6: (2) ['P1 Stick Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 7: (2) ['P2 Coin', 'switch 0x07']
// 8: (2) ['P2 Start', 'switch 0x03']
// 9: (2) ['Reset', 'switch 0x3D']
// 10: (2) ['Auto Up / Manual Down', 'switch 0x0A']
// 11: (2) ['Advance', 'switch 0x0B']
// 12: (2) ['High Score Reset', 'switch 0x0C']
// 13: (2) ['Tilt', 'switch 0x14']