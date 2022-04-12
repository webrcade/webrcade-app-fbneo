export class BaseMapping {
  constructor(emuInput) {
    this.emuInput = emuInput;
  }

  getName() { throw Error("A mapping names has not been specified."); }
  getKeyboardMap() { return null; }
  getButtonMap() { return null; }
  getAnalogToDpadMap() { return []; }
  getRemapList() { return null; }
}
