import {BaseControl, BaseControlOptions} from './base';

export interface DropdownControlOptions extends BaseControlOptions {
  options: {key: string, value: string}[];
}

export class DropdownControl extends BaseControl {

  controlType = 'dropdown';

  options: {key: string, value: string}[] = [];

  constructor(options: DropdownControlOptions) {
    super(options);
    this.options = options['options'] || [];
  }

}
