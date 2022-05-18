import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class UsClassicMapping extends BaseMapping {

  getName() { return "usclssic"; }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 2),
      new AnalogAdjustment(0, false, 2),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0, 'P1 Trackball X',
        'slider 0x4000 0x4001 speed 0x800 center 10', (emuInput.INP_LEFT | emuInput.INP_RIGHT),
        'joyaxis 0 0', 0, true
      ),
      new AnalogModeDetector(
        0, 'P1 Trackball Y',
        'slider 0x4002 0x4003 speed 0x800 center 10', (emuInput.INP_UP | emuInput.INP_DOWN),
        'joyaxis 0 1', 0, false
      )
    ];
  }


  getRemapList() {
    return [
      ["P2 Trackball X", "joyaxis 1 0"],
      ["P2 Trackball Y", "joyaxis 1 1"],
    ];
  }  

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Start', 'switch 0x02']
// 2: (2) ['P1 Button 1', 'switch 0x4080']
// 3: (2) ['P1 Trackball X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['P1 Trackball Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 5: (2) ['P2 Coin', 'switch 0x07']
// 6: (2) ['P2 Start', 'switch 0x03']
// 7: (2) ['P2 Button 1', 'switch 0x4180']
// 8: (2) ['P2 Trackball X', 'joyslider 0 0 speed 0x800 center 10']
// 9: (2) ['P2 Trackball Y', 'joyslider 0 1 speed 0x800 center 10']
// 10: (2) ['Reset', 'switch 0x3D']
// 11: (2) ['Service', 'switch 0x0A']
// 12: (2) ['Tilt', 'switch 0x14']
// 13: (2) ['Dip A', 'constant 0xFF']
// 14: (2) ['Dip B', 'constant 0xFE']