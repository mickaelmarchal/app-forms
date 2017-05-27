import { BaseControl, BaseControlOptions } from './base';
import {MinLengthValidator} from '../validators/minlength';
import {MaxLengthValidator} from '../validators/maxlength';
import {PatternValidator} from '../validators/pattern';

export interface TextControlOptions extends BaseControlOptions {

  /** Type of input (<input type="xxx">) */
  inputType?: string;

  /** Minimum accepted text length */
  minLength?: number;

  /** Maximum accepted text length */
  maxLength?: number;

  /** Accepted pattern for text */
  pattern?: string | RegExp;
}

/**
 * Text form control
 * Renders as <input type="text" />
 * Minlength, maxlength and pattern constraints can be specified in options
 * The control can be extended to create other text-based input controls
 */
export class TextControl extends BaseControl {

  controlType = 'text';
  inputType = 'text';

  minLength: number | null;
  maxLength: number | null;
  pattern: string | RegExp | null;

  constructor(options: TextControlOptions = {}) {
    super(options);
    this.inputType = options['inputType'] || 'text';
    this.minLength = options['minLength'] || null;
    this.maxLength = options['maxLength'] || null;
    this.pattern = options['pattern'] || null;

    if (this.minLength) {
      this.addValidator(new MinLengthValidator(this.minLength));
    }
    if (this.maxLength) {
      this.addValidator(new MaxLengthValidator(this.maxLength));
    }
    if (this.pattern) {
      this.addValidator(new PatternValidator(this.pattern));
    }
  }

  /**
   * Get validation pattern as string (ready to use in HTML pattern attribute)
   * @returns {string}
   */
  get patternToString()
  {
    if (this.pattern instanceof RegExp) {
      return this.pattern.toString().replace(/^[\/]|[\/]$/g, '');
    }

    return this.pattern;
  }

}
