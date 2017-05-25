import { Validators } from '@angular/forms';
import { BaseValidator } from './base';

export class EmailValidator extends BaseValidator {

  constructor(message?: string) {
    super();

    this.name = 'email';

    // TODO: replace this by custom email validator that accepts empty strings
    this.validator = <any>Validators.email;
    this.validationMessage = message || 'Field must contain a valid e-mail address.';
  }
}
