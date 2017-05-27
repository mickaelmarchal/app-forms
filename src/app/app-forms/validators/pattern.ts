import { Validators } from '@angular/forms';
import { BaseValidator } from './base';

export class PatternValidator extends BaseValidator {

  constructor(pattern: string, message?: string) {
    super();

    this.name = 'pattern';
    this.validator = <any>Validators.pattern(pattern);
    this.validationMessage = message || 'Field value is not valid.';
  }
}
