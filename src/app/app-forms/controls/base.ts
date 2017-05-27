import { AsyncValidatorFn, FormControl } from '@angular/forms';
import {BaseValidator} from '../validators/base';

/**
 * Base parameters for form controls
 */
export interface BaseControlOptions {

  /** label for the form control */
  label?: string;

  /** default value */
  value?: any;

  /** array of validators */
  validators?: BaseValidator[];

  /** array of async validators */
  asyncValidators?: AsyncValidatorFn|AsyncValidatorFn[];

  /** true to disable default validators that are set-up */
  disableDefaultValidators?: boolean;

  /** what to do when value of element has changed */
  onChange?: (value: any) => void;
}

/**
 * Base class for form controls
 */
export class BaseControl extends FormControl {

  controlType: string;
  label: string | null;
  formValidators: BaseValidator[];
  formErrors: string;
  isGroup = false;

  constructor(options: BaseControlOptions = {}) {

    super(
      options['value'] || null,
      options['validators'] ? options['validators'].map((validator) => validator.validator) : [],
      options['asyncValidators'] || [],
    );

    this.label = options['label'] || null;
    this.formValidators = options['validators'] || [];

    if (options['onChange']) {
      this.valueChanges.subscribe(options['onChange']);
    }

    this.valueChanges.subscribe(data => this.updateValidationMessages(data));
    this.updateValidationMessages(); // (re)set validation messages now
  }

  /**
   * Update validation messages according to field state
   * @param value field value
   */
  private updateValidationMessages(value?: any) {

    this.formErrors = '';

    if (!this.valid && (this.dirty || this.touched)) {

      // iterate over all errors, fetch corresponding validator and use error message
      for (const key in this.errors) {
        if (this.errors.hasOwnProperty(key)) {
          for (const formValidator of this.formValidators) {
            if (formValidator.name === key) {
              this.formErrors += formValidator.validationMessage + ' ';
            }
          }
        }
      }
    }
  }

  /**
   * Is the field required ?
   * @returns {boolean}
   */
  public get isRequired() {
    return this.containsValidator('required');
  }

  /**
   * Add validator to control
   * @param validator
   */
  public addValidator(validator: BaseValidator) {

    if (! this.containsValidator(validator)) {

      this.formValidators.push(validator);
      if (this.validator instanceof Array) {
        this.validator.push(validator.validator);
      } else {
        this.setValidators(validator.validator);
      }
      return;
    }
  }

  /**
   * Does the field includes given validator?
   * @param validator
   * @returns {boolean}
   */
  public containsValidator(validator: BaseValidator|string) {
    if (validator instanceof BaseValidator) {
      validator = validator.name;
    }

    for (const val of this.formValidators) {
      if (val.name === validator) {
        return true;
      }
    }

    return false;
  }

}
