import { AsyncValidatorFn, FormControl } from '@angular/forms';
import {BaseValidator} from '../validators/base';
/**
 * Base class for form controls
 */

export interface BaseControlOptions {

  // label for the form element
  label?: string;

  // default value
  value?: any;

  // array of vaidators
  validators?: BaseValidator[];

  // array on async validators
  asyncValidators?: AsyncValidatorFn|AsyncValidatorFn[];

  // true to disable default validators that are set-up
  disableDefaultValidators?: boolean;

  // what to do when value of element has changed
  onChange?: (value: any) => void;
}

export class BaseControl extends FormControl {

  controlType: string;
  label: string | null;
  formValidators: BaseValidator[];
  formErrors: string;
  isGroup = false;

  constructor(options: BaseControlOptions = {}) {

    super(
      options['value'] || null,
      options['validators'] ? options['validators'].map((validator) => { return validator.validator; }) : [],
      options['asyncValidators'] || [],
    );

    this.label = options['label'] || null;
    this.formValidators = options['validators'] || [];

    if (options['onChange']) {
      this.valueChanges.subscribe(options['onChange']);
    }

    this.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }


  private onValueChanged(data?: any) {

    this.formErrors = '';

    if (!this.valid && (this.dirty || this.touched)) {
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
