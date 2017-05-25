import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  @Input() formGroup: FormGroup;
  payLoad = '';

  onSubmit() {
    this.payLoad = JSON.stringify(this.formGroup.value);
  }

}
