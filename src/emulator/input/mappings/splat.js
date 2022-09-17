import { BaseMapping } from './base';

export class SplatMapping extends BaseMapping {
  getName() {
    return 'splat';
  }

  getAnalogToDpadMap() {
    return [2, 3];
  }
}
