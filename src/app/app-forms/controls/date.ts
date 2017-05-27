import { BaseControl, BaseControlOptions } from './base';
import {PatternValidator} from '../validators/pattern';

/**
 * Parameters for Date form control
 */
export interface DateControlOptions extends BaseControlOptions {

  /** Min valid date */
  min?: Date;

  /** Max valid date */
  max?: Date;
}

/**
 * Date form control
 * Renders as <input type="date" />
 * Minimum and maximum date constraints can be specified in options
 */
export class DateControl extends BaseControl {

  controlType = 'date';

  /** Min valid date */
  min: Date | null;

  /** Max valid date */
  max: Date | null;


  constructor(options: DateControlOptions = {}) {
    super(options);
    this.min = options['min'] || null;
    this.max = options['max'] || null;

    // add email validator unless explicitly disabled
    if (! options['disableDefaultValidators']) {
      this.addValidator(new PatternValidator('^[0-9]{4}-[0-9]{2}-[0-9]{2}$', 'Date format is not valid, use format "YYYY-MM-DD".'));
    }
  }

  /**
   * Get "min" date as YYYY-MM-DD string or null
   * @returns {string}
   */
  get minToString() {
    return this.min ? this.min.toISOString().substr(0, 10) : null;
  }

  /**
   * Get "max" date as YYYY-MM-DD string or null
   * @returns {string}
   */
  get maxToString() {
    return this.max ? this.max.toISOString().substr(0, 10) : null;
  }

}
