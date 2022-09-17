import { BaseMapping } from './base';

export class FiretrapMapping extends BaseMapping {
  getName() {
    return 'firetrap';
  }

  getAnalogToDpadMap() {
    return [1, -1, 3];
  }
}
