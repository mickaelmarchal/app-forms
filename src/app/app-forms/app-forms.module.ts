import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { FormGroupComponent } from './form-group.component';
import { KeysPipe } from './keys.pipe';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [
    FormComponent, FormGroupComponent, KeysPipe
  ],
  providers: [],
  exports: [ FormComponent ]
})
export class AppFormsModule { }
