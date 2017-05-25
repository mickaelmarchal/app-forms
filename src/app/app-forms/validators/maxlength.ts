import { Validators } from '@angular/forms';
import { BaseValidator } from './base';

export class MaxLengthValidator extends BaseValidator {

  constructor(maxLength: number, message?: string) {
    super();

    this.name = 'maxlength';
    this.validator = <any>Validators.maxLength(maxLength);
    this.validationMessage = message || 'Field cannot be more than ' + maxLength + ' characters long.';
  }
}
