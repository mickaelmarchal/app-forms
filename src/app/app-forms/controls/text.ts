import { BaseControl } from './base';

export class TextControl extends BaseControl {

  // TODO generalize this as 'textbox' and include support for min, max options that will result in HTML atribute and validator
  // TODO if the value is '', it should instead return null?
  controlType = 'text';

}
