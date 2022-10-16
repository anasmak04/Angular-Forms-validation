import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from '../reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialUiModule } from 'src/app/custom-material-ui/custom-material-ui.module';
@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CustomMaterialUiModule,
  ],
  exports : [
    ReactiveFormsComponent,
    ReactiveFormsModule,
    FormsModule,
    CustomMaterialUiModule
  ]
})
export class ReactiveModelModule { }
