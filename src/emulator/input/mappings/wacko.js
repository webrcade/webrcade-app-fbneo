import { AnalogAdjustment, AnalogModeDetector, BaseMapping } from './base';

export class WackoMapping extends BaseMapping {
  getName() {
    return 'wacko';
  }

  getAnalogToDpadMap() {
    return [1];
  }

  getKeyboardMap() {
    const { emuInput } = this;
    return [
      {
        ...emuInput.KEYMAP_BASE_WITH_DPAD,
      },
      {
        ...emuInput.KEYMAP_BASE_WITH_DPAD,
      },
    ];
  }

  getAnalogAdjustments() {
    return [
      new AnalogAdjustment(0, true, 0.75),
      new AnalogAdjustment(0, false, 0.75),
    ];
  }

  getAnalogModeDetectors() {
    const { emuInput } = this;
    return [
      new AnalogModeDetector(
        0,
        'P1 Trackball X',
        'slider 0x4100 0x4101 speed 0x800 center 10',
        emuInput.INP_LEFT | emuInput.INP_RIGHT,
        'joyaxis 0 0',
        0,
        true,
      ),
      new AnalogModeDetector(
        0,
        'P1 Trackball Y',
        'slider 0x4102 0x4103 speed 0x800 center 10',
        emuInput.INP_UP | emuInput.INP_DOWN,
        'joyaxis 0 1',
        0,
        false,
      ),
    ];
  }

  isAnalogDpadEnabled() {
    return false;
  }

  getRemapList() {
    return [
      ['P1 Up', 'switch 0x4102'],
      ['P1 Down', 'switch 0x4103'],
      ['P1 Left', 'switch 0x4100'],
      ['P1 Right', 'switch 0x4101'],
      // ['P1 Trackball X', 'slider 0x4000 0x4001 speed 0x800 center 10'],
      // ['P1 Trackball Y', 'slider 0x4002 0x4003 speed 0x800 center 10']
      ['P1 Trackball X', 'joyaxis 0 0'],
      ['P1 Trackball Y', 'joyaxis 0 1'],
    ];
  }
}
