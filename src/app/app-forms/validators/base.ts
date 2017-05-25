import {ValidatorFn} from '@angular/forms';

export class BaseValidator {

  name: string;
  validator: ValidatorFn;
  validationMessage: string;

}
