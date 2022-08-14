import { BaseMapping } from './base';

export class BlackWidowMapping extends BaseMapping {
  getName() {
    return 'bwidow';
  }

  getAnalogToDpadMap() {
    return [1];
  }
}
