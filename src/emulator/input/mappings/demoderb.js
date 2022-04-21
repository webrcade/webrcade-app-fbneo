import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class DemolitionDerbyMapping extends BaseMapping {

  getName() { return "demoderb"; }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, .5),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Dial',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      )
    ];
  }  

  getRemapList() {
    return [
      ["P2 Dial", "joyaxis 1 0"],
      ["P3 Dial", "joyaxis 2 0"],
      ["P4 Dial", "joyaxis 3 0"],
    ]
  }

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Dial', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 3: (2) ['P1 Button 1', 'switch 0x4080']
// 4: (2) ['P1 Button 2', 'switch 0x4081']
// 5: (2) ['P2 Coin', 'switch 0x07']
// 6: (2) ['P2 Start', 'switch 0x03']
// 7: (2) ['P2 Dial', 'joyslider 0 0 speed 0x800 center 10']
// 8: (2) ['P2 Button 1', 'switch 0x4180']
// 9: (2) ['P2 Button 2', 'switch 0x4181']
// 10: (2) ['P3 Coin', 'switch 0x08']
// 11: (2) ['P3 Start', 'switch 0x04']
// 12: (2) ['P3 Dial', 'joyslider 1 0 speed 0x800 center 10']
// 13: (2) ['P3 Button 1', 'switch 0x4280']
// 14: (2) ['P3 Button 2', 'switch 0x4281']
// 15: (2) ['P4 Coin', 'switch 0x09']
// 16: (2) ['P4 Start', 'switch 0x05']
// 17: (2) ['P4 Dial', 'joyslider 2 0 speed 0x800 center 10']
// 18: (2) ['P4 Button 1', 'switch 0x4380']
// 19: (2) ['P4 Button 2', 'switch 0x4381']
// 20: (2) ['Reset', 'switch 0x3D']
// 21: (2) ['Tilt', 'switch 0x14']
// 22: (2) ['Dip A', 'constant 0xFF']
// 23: (2) ['Dip B', 'constant 0x20']