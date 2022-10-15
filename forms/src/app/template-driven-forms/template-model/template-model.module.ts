import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialUiModule } from 'src/app/custom-material-ui/custom-material-ui.module';
import { TemplateDrivenFormsComponent } from '../template-driven-forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TemplateDrivenFormsComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialUiModule,
    FormsModule,
  ],

  exports : [
    TemplateDrivenFormsComponent,
    CustomMaterialUiModule,
    FormsModule,
  ]
})
export class TemplateModelModule { }
