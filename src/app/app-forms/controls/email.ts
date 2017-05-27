import { EmailValidator } from '../validators/email';
import { BaseControl, BaseControlOptions } from './base';


export class EmailControl extends BaseControl {

  constructor(options: BaseControlOptions = {}) {

    if (! options.disableDefaultValidators) {
      if (!options.validators) {
        options.validators = [new EmailValidator()];
      } else {
        options.validators.push(new EmailValidator());
      }
    }

    super(options);

    this.controlType = 'email';
  }

}
