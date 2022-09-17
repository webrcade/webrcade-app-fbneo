import { BaseMapping } from './base';

export class FaceoffMapping extends BaseMapping {
  getName() {
    return 'faceoff';
  }

  getAnalogToDpadMap() {
    return [2, 3];
  }
}
