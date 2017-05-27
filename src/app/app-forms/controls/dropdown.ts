import {BaseControl, BaseControlOptions} from './base';

export interface DropdownControlOptions extends BaseControlOptions {
  options: {key: string|number, value: string}[];
}

export class DropdownControl extends BaseControl {

  controlType = 'dropdown';

  options: {key: string|number, value: string}[] = [];

  constructor(options: DropdownControlOptions) {
    super(options);
    this.options = options['options'] || [];
  }

}
