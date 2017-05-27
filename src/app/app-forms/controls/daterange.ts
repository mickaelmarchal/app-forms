import {DateControl} from './date';
import {GroupControl} from './group';
import {BaseControlOptions} from './base';


/**
 * Date Range form control
 * Provide a group of two Date controls to select a date range
 *
 * TODO: first date must be earlier than second date
 */
export class DateRangeControl extends GroupControl {

  controlType = 'group';

  constructor(options: BaseControlOptions) {
    super({
      from: new DateControl(),
      to: new DateControl(),
    }, options);
  }


}
