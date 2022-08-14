import { BaseMapping } from './base';

export class CloakAndDaggerMapping extends BaseMapping {
  getName() {
    return 'cloak';
  }

  getAnalogToDpadMap() {
    return [1];
  }
}
