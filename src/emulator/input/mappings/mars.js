import { BaseMapping } from './base';

export class MarsMapping extends BaseMapping {
  getName() {
    return 'mars';
  }

  getAnalogToDpadMap() {
    return [2, 3];
  }
}
