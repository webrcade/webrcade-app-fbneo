import { BaseMapping } from './base';

export class RockClimberMapping extends BaseMapping {
  getName() {
    return 'rockclim';
  }

  getAnalogToDpadMap() {
    return [1, -1, 3];
  }
}
