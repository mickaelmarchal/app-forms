import { Validators } from '@angular/forms';
import { BaseValidator } from './base';

export class RequiredValidator extends BaseValidator {

  constructor(message?: string) {
    super();

    this.name = 'required';
    this.validator = <any>Validators.required;
    this.validationMessage = message || 'Field is required.';
  }
}
