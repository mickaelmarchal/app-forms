import { AbstractControl, FormArray } from '@angular/forms';

export interface RepeatControlOptions {
  label?: string;
  count?: number;
  control: (count: number) => AbstractControl;
}

export class RepeatControl extends FormArray {

  controlType = 'repeat';

  label: string | null;
  count: number;
  control: (count: number) => AbstractControl;

  isGroup = true;

  constructor(options: RepeatControlOptions) {

    super([]);

    this.control = options.control;
    this.label = options['label'] || null;

    if (options['count']) {
      this.setCount(options['count']);
    } else {
      this.count = 0;
    }

  }

  public setCount(count: number) {
    const diff = count - this.count;

    if (diff < 0) {
      // Removing elements
      this.controls = this.controls.slice(0, count);
      this.setValue(this.value.slice(0, count));
    } else if (diff > 0) {
      // Adding elements
      for (let i = 0; i < diff ; i ++) {
        this.push(this.control(this.count + i));
      }
    }

    this.count = count;


  }

}
