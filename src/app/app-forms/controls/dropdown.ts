import { BaseControl, BaseControlOptions } from './base';

/**
 * Parameters for Dropdown form control
 */
export interface DropdownControlOptions extends BaseControlOptions {

  /** Array of options for dropdown */
  options: {key: string|number, value: string}[];
}

/**
 * Dropdown form control
 * Renders as <select>
 */
export class DropdownControl extends BaseControl {

  controlType = 'dropdown';

  options: {key: string|number, value: string}[] = [];

  constructor(options: DropdownControlOptions) {
    super(options);
    this.options = options['options'] || [];
  }

}
