import { BaseControl, BaseControlOptions } from './base';
import { EmailValidator } from '../validators/email';


export class EmailControl extends BaseControl {

  constructor(options: BaseControlOptions) {

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
