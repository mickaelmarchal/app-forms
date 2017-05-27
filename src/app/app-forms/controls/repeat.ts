import { AbstractControl, FormArray } from '@angular/forms';

/**
 * Options for Repeat form control
 */
export interface RepeatControlOptions {

  /** Label for group */
  label?: string;

  /** Number of items to show on form init */
  count?: number;

  /** Callback that returns a new instance of the control to repeat */
  controlCreateFn: (count: number) => AbstractControl;
}

/**
 * Repeat form control
 * Contains a single control that can be repeated N times
 */
export class RepeatControl extends FormArray {

  controlType = 'repeat';

  label: string | null;
  count: number;
  controlCreateFn: (count: number) => AbstractControl;

  isGroup = true;

  constructor(options: RepeatControlOptions) {

    super([]);

    this.controlCreateFn = options.controlCreateFn;
    this.label = options['label'] || null;

    if (options['count']) {
      this.setCount(options['count']);
    } else {
      this.count = 0;
    }
  }

  /**
   * Set the number of controls to display
   * @param count
   */
  public setCount(count: number) {
    const diff = count - this.count;

    if (diff < 0) {
      // Removing elements
      this.controls = this.controls.slice(0, count);
      this.setValue(this.value.slice(0, count));
    } else if (diff > 0) {
      // Adding elements
      for (let i = 0; i < diff ; i ++) {
        this.push(this.controlCreateFn(this.count + i));
      }
    }

    this.count = count;
  }

}
