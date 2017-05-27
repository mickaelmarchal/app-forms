import {DateControl} from './date';
import {GroupControl} from './group';
import {BaseControlOptions} from './base';



export class DateRangeControl extends GroupControl {

  controlType = 'group';

  constructor(options: BaseControlOptions) {
    super({
      from: new DateControl(),
      to: new DateControl(),
    }, options);
  }


}
