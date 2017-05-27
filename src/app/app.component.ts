import { Component } from '@angular/core';

import { TextControl } from './app-forms/controls/text';
import { GroupControl } from './app-forms/controls/group';
import { RequiredValidator } from './app-forms/validators/required';

import { exampleForm } from './example-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formGroup: GroupControl;

  constructor() {

    this.formGroup = new GroupControl(exampleForm());
  }

  public autofill() {

    this.formGroup.patchValue({
      name: 'My name',
      address: {
        street: 'My street'
      },
      email: 'email@company.com'
    });

  }

  public addField() {

    this.formGroup.addControl('test', new TextControl({
      label: 'Test',
      validators: [ new RequiredValidator() ]
    }));
  }

}
