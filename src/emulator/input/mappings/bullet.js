import { BaseMapping } from "./base";

export class BulletMapping extends BaseMapping {

  getName() { return "bullet"; }

  getAnalogToDpadMap() {
    return [2, 3];
  }

  getRemapList() { 
    return [
      ["P1 Up 2", "switch 0x4202"],
      ["P1 Down 2", "switch 0x4203"],
      ["P1 Left 2", "switch 0x4200"],
      ["P1 Right 2", "switch 0x4201"],      
      ["P2 Up 2", "switch 0x4302"],
      ["P2 Down 2", "switch 0x4303"],
      ["P2 Left 2", "switch 0x4300"],
      ["P2 Right 2", "switch 0x4301"],      
    ]
  }    
}
