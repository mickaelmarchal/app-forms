import { BaseControl, BaseControlOptions } from './base';
import {MinLengthValidator} from '../validators/minlength';
import {MaxLengthValidator} from '../validators/maxlength';
import {PatternValidator} from '../validators/pattern';

export interface TextControlOptions extends BaseControlOptions {
  inputType?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export class TextControl extends BaseControl {

  controlType = 'text';
  inputType = 'text';
  minLength = null;
  maxLength = null;
  pattern = null;

  constructor(options: TextControlOptions = {}) {
    super(options);
    this.inputType = options['inputType'] || 'text';
    this.minLength = options['minLength'] || null;
    this.maxLength = options['maxLength'] || null;
    this.pattern = options['pattern'] || null;

    if (this.minLength) {
      if (!options.validators) {
        options.validators = [new MinLengthValidator(this.minLength)];
      } else {
        options.validators.push(new MinLengthValidator(this.minLength));
      }
    }

    if (this.maxLength) {
      if (!options.validators) {
        options.validators = [new MaxLengthValidator(this.maxLength)];
      } else {
        options.validators.push(new MaxLengthValidator(this.maxLength));
      }
    }

    if (this.pattern) {
      if (!options.validators) {
        options.validators = [new PatternValidator(this.pattern)];
      } else {
        options.validators.push(new PatternValidator(this.pattern));
      }
    }

    super(options);

  }

}
