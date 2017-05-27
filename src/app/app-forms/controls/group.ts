import { FormGroup } from '@angular/forms';
import {BaseControlOptions} from './base';

/**
 * Group form control
 * Contain a group of several sub form controls
 */
export class GroupControl extends FormGroup {

  controlType = 'group';
  isGroup = true;

  label: string | null;

  constructor(controls, options: BaseControlOptions = {}) {
    super(controls);

    this.label = options['label'] || null;
  }

}
