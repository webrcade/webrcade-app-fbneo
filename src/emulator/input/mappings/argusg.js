import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from "./base";

export class ArgusMapping extends BaseMapping {

  getName() { return "argusg"; }

  getAnalogAdjustments() { 
    return [
      new AnalogAdjustment(0, true, .5),
      new AnalogAdjustment(0, false, .5),
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

  // getRemapList() {
  //   return [
  //     ["Dip A", "constant 0xB3"],
  //     ["Dip D", "constant 0x10"],
  //   ];
  // }  

  isAnalogDpadEnabled() { return false; }
}

// 0: (2) ['P1 Coin', 'switch 0x06']
// 1: (2) ['P1 Button 1', 'switch 0x4080']
// 2: (2) ['P1 Button 2', 'switch 0x4081']
// 3: (2) ['P1 Trackball X', 'slider 0x4000 0x4001 speed 0x800 center 10']
// 4: (2) ['P1 Trackball Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
// 5: (2) ['P2 Coin', 'switch 0x07']
// 6: (2) ['P2 Button 1', 'switch 0x4180']
// 7: (2) ['P2 Button 2', 'switch 0x4181']
// 8: (2) ['Reset', 'switch 0x3D']
// 9: (2) ['Select', 'switch 0x3C']
// 10: (2) ['Dip A', 'constant 0x12']
// 11: (2) ['Dip B', 'constant 0x01']