import { EmailControl } from './app-forms/controls/email';
import { TextControl } from './app-forms/controls/text';
import { DropdownControl } from './app-forms/controls/dropdown';
import { GroupControl } from './app-forms/controls/group';
import { RequiredValidator } from './app-forms/validators/required';
import { DateControl } from './app-forms/controls/date';
import { DateRangeControl } from './app-forms/controls/daterange';
import { TextLabelControl } from './app-forms/controls/text-label';
import { RepeatControl } from './app-forms/controls/repeat';


/**
 * Example form
 */
function exampleForm() {

  return {

    name: new TextControl({
      label: 'Name',
      validators: [new RequiredValidator('Name is required.')],
    }),

    address: new GroupControl({
      street: new TextControl({
        label: 'Street',
        validators: [new RequiredValidator()],
      }),
      postcode: new TextControl({
        label: 'Post code',
        value: '8000',
        maxLength: 7,
        pattern: '^[A-Z0-9 -.]*$'
      })
    }),

    email: new EmailControl({
      label: 'Email address',
      value: 'email@toto.com',
      validators: [new RequiredValidator('Email is required.')],
    }),

    bravery: new DropdownControl({
      label: 'Bravery Rating',
      options: [
        {key: 'solid', value: 'Solid'},
        {key: 'great', value: 'Great'},
        {key: 'good', value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
      ]
    }),

    dateOfBirth: new DateControl({
      label: 'Date of birth',
      min: new Date('1980-01-01'),
      max: new Date('1999-12-31')
    }),

    text: new TextLabelControl({
      caption: 'Hello'
    }),

    dateRange: new DateRangeControl({
      label: 'Date range'
    }),

    roomsNb: new DropdownControl({
      label: 'Number of rooms',
      options: [
        {key: 1, value: '1'},
        {key: 2, value: '2'},
        {key: 3, value: '3'},
        {key: 4, value: '4'}
      ],
      onChange: (data) => {
        if (this.formGroup.contains('rooms')) {
          const room = this.formGroup.get('rooms');
          if (room instanceof RepeatControl) {
            room.setCount(parseInt(data, 10));
          }
        }
      }
    }),

    rooms: new RepeatControl({
      controlCreateFn: (count) => new TextControl({label: 'Room ' + (count + 1)})
    })
  };
}

export { exampleForm };
