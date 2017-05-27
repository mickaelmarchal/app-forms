import { EmailValidator } from '../validators/email';
import { BaseControl, BaseControlOptions } from './base';

/**
 * Email form control
 * Renders as <input type="email" />
 */
export class EmailControl extends BaseControl {

  controlType = 'email';

  constructor(options: BaseControlOptions = {}) {
    super(options);

    // add email validator unless explicitly disabled
    if (! options['disableDefaultValidators']) {
      this.addValidator(new EmailValidator());
    }
  }

}
