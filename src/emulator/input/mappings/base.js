export class BaseMapping {
  constructor(emuInput) {
    this.emuInput = emuInput;
  }

  getName() { throw Error("A mapping names has not been specified."); }
  getKeyboardMap() { return null; }
  getButtonMap() { return null; }
  getAnalogToDpadMap() { return []; }
  getRemapList() { return null; }
  getAnalogAdjustments() { return []; }
  getAnalogModeDetectors() { return []; }
  isAnalogDpadEnabled() { return true; }
}

export class AnalogModeDetector {
  constructor(
    playerIndex, controlString,
    digitalString, digitalTriggerButtons,
    analogString, analogStickIndex, analogStickIsX) {
    this.playerIndex = playerIndex;
    this.controlString = controlString;
    this.digitalString = digitalString;
    this.digitalTriggerButtons = digitalTriggerButtons;
    this.analogString = analogString;
    this.analogStickIndex = analogStickIndex;
    this.analogStickIsX = analogStickIsX;
    this.isDigital = -1;
  }

  getPlayerIndex() { return this.playerIndex; }
  getAnalogStickIndex() { return this.analogStickIndex; }
  isAnalogX() { return this.analogStickIsX; }
  getAnalogString() { return this.analogString; }
  getDigitalString() { return this.digitalString; }
  getControlString() { return this.controlString; }

  check(emulatorInput, digitalButtons, analogValue) {
    if ((digitalButtons & this.digitalTriggerButtons) && this.isDigital !== 1) {
      emulatorInput.setGameInput(`"${this.controlString}" ${this.digitalString}`);
      this.isDigital = 1;
    } else if (analogValue !== 0 && this.isDigital !== 0) {
      emulatorInput.setGameInput(`"${this.controlString}" ${this.analogString}`);
      this.isDigital = 0;
    }
  }
}

export class AnalogAdjustment {
  constructor(stick, isX, multipler = 1) {
    this.stick = stick;
    this.isXAxis = isX;
    this.multipler = multipler;
  }

  getStick() { return this.stick; }

  isX() { return this.isXAxis; }

  getValue(controllers, index) {
    const { stick, isXAxis, multipler } = this;
    let val = controllers.getAxisValue(index, stick, isXAxis);
    if (val > -.15 && val < .15) return 0;
    val = val > 0 ? (val - .15) : (val + .15);
    val = (val * (1 / .85)) * 0x8000;
    val *= multipler;
    return val;
  }
}
