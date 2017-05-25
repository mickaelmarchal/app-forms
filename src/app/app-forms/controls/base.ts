import { AsyncValidatorFn, FormControl } from '@angular/forms';
import {BaseValidator} from '../validators/base';
/**
 * Base class for form controls
 */

export interface BaseControlOptions {
  label?: string;
  value?: any;
  validators?: BaseValidator[];
  asyncValidators?: AsyncValidatorFn|AsyncValidatorFn[];
  disableDefaultValidators?: boolean;
};

export class BaseControl extends FormControl {

  controlType: string;
  label: string | null;
  formValidators: BaseValidator[];
  formErrors: string;


  constructor(options: BaseControlOptions) {

    super(
      options['value'] || null,
      options['validators'] ? options['validators'].map((validator) => { return validator.validator; }) : [],
      options['asyncValidators'] || [],
    );

    this.label = options['label'] || null;
    this.formValidators = options['validators'] || [];

    this.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }


  private onValueChanged(data?: any) {

    this.formErrors = '';

    if (!this.valid && (this.dirty || this.touched)) {
      for (const key in this.errors) {
        for (const formValidator of this.formValidators) {
          if (formValidator.name === key) {
            this.formErrors += formValidator.validationMessage + ' ';
          }
        }

      }
    }
  }

  public isRequired() {
    // TODO could probably optimize this
    return typeof this.formValidators.find((validator) => { return validator.name === 'required'; }) !== 'undefined';
  }

  /*  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string
    } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
    }*/
}
