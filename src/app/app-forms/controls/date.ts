import { BaseControl, BaseControlOptions } from './base';

export interface DateControlOptions extends BaseControlOptions {
  min?: Date;
  max?: Date;
}


export class DateControl extends BaseControl {

  min = null;
  max = null;

  constructor(options: DateControlOptions = {}) {

    super(options);

    this.controlType = 'date';
    this.min = options['min'] || null;
    this.max = options['max'] || null;
  }


  get minToString() {
    return this.min ? this.min.toISOString().substr(0, 10) : null;
  }

  get maxToString() {
    return this.max ? this.max.toISOString().substr(0, 10) : null;
  }

}
