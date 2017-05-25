import { Validators } from '@angular/forms';
import { BaseValidator } from './base';

export class MinLengthValidator extends BaseValidator {

  constructor(minLength: number, message?: string) {
    super();

    this.name = 'minlength';
    this.validator = <any>Validators.minLength(minLength);
    this.validationMessage = message || 'Field must be at least ' + minLength + ' characters long.';
  }
}
