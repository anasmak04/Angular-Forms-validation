import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from '../reactive-forms.component';

@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ReactiveFormsComponent
  ]
})
export class ReactiveModelModule { }
