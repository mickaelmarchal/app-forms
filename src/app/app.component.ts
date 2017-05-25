import { Component } from '@angular/core';

import { EmailControl } from './app-forms/controls/email';
import { TextControl } from './app-forms/controls/text';
import {DropdownControl} from './app-forms/controls/dropdown';
import { GroupControl } from './app-forms/controls/group';
import {RequiredValidator} from "./app-forms/validators/required";
import {MinLengthValidator} from "./app-forms/validators/minlength";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  formGroup: GroupControl;

  constructor() {

    this.formGroup = new GroupControl({

      name: new TextControl({
        label: 'Name',
        validators: [ new RequiredValidator('Name is required.'), new MinLengthValidator(5)],
      }),

      address: new GroupControl({
        street: new TextControl({
          label: 'Street',
          validators: [ new RequiredValidator()],
        }),
        postcode: new TextControl({
          label: 'Post code',
          value: '8000'
        })
      }),

      // TODO integrate automatically validators in specialized fields. Eg, include an email validator in EmailControl
      // it should still be possible to overwrite with custom validators
      email: new EmailControl({
        label: 'Email address',
        value: 'email@toto.com',
        validators: [ new RequiredValidator('Email is required.')],
      }),

      bravery: new DropdownControl({
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid'},
          { key: 'great', value: 'Great'},
          { key: 'good', value: 'Good'},
          { key: 'unproven', value: 'Unproven'}
        ]
      })
    });
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

}
