import { BaseMapping } from './base';

export class CrazyClimberMapping extends BaseMapping {
  getName() {
    return 'cclimber';
  }

  getAnalogToDpadMap() {
    return [2, 3];
  }
}
