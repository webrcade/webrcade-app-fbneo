import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class EscapeFromPlanetOfRobotMonstersMapping extends BaseMapping {

  getName() { return "eprom"; }

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

  getRemapList() {
    return [
      ["P2 Stick X", "joyaxis 1 0"],
      ["P2 Stick Y", "joyaxis 1 1"],
    ];
  }

  isAnalogDpadEnabled() { return false; }
}


// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Stick X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 2: (2) ['P1 Stick Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 3: (2) ['P1 Button 1', 'switch 0x4080']
// 4: (2) ['P1 Button 2', 'switch 0x4081']
// 5: (2) ['P1 Button 3', 'switch 0x4082']
// 6: (2) ['P2 Coin', 'switch 0x07']
// 7: (2) ['P2 Stick X', 'joyslider 0 0 speed 0x800 center 10']
// 8: (2) ['P2 Stick Y', 'joyslider 0 1 speed 0x800 center 10']
// 9: (2) ['P2 Button 1', 'switch 0x4180']
// 10: (2) ['P2 Button 2', 'switch 0x4181']
// 11: (2) ['P2 Button 3', 'switch 0x4182']
// 12: (2) ['Reset', 'switch 0x3D']
// 13: (2) ['Dip A', 'constant 0x02']