import { BaseMapping } from './base';

export class DribblingMapping extends BaseMapping {
  getName() {
    return 'dribling';
  }

  getAnalogToDpadMap() {
    return [2, 3];
  }
}
