import { BaseControl, BaseControlOptions } from './base';

/**
 * Paramaters for Text Label form control
 */
export interface TextLabelControlOptions extends BaseControlOptions {

  /** Text caption to display */
  caption: string;
}

/**
 * Text Label form control
 * Just render a text that is shown in the form.
 * No validation can be done, no value will be returned.
 */
export class TextLabelControl extends BaseControl {

  controlType = 'textLabel';
  caption: string | null;

  constructor(options: TextLabelControlOptions) {
    super(options);

    this.caption = options['caption'] || null;
  }

  /**
   * Disabled addValidator
   */
  addValidator() { }

}
