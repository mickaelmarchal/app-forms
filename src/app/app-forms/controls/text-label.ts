import { BaseControl, BaseControlOptions } from './base';

export interface TextLabelControlOptions extends BaseControlOptions {
  caption: string;
}


export class TextLabelControl extends BaseControl {

  controlType = 'textLabel';
  caption: string | null;

  constructor(options: TextLabelControlOptions) {
    super(options);

    this.caption = options['caption'] || null;
  }

}
