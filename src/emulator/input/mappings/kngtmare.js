import { BaseMapping } from './base';

export class KnightmareMapping extends BaseMapping {
  getName() {
    return 'kngtmare';
  }

  getAnalogToDpadMap() {
    return [1];
  }
}
