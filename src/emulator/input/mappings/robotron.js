import { BaseMapping } from './base';

export class RobotronMapping extends BaseMapping {
  getName() {
    return 'robotron';
  }

  getAnalogToDpadMap() {
    return [1];
  }
}
