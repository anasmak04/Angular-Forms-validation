import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialUiModule } from 'src/app/custom-material-ui/custom-material-ui.module';
import { TemplateDrivenFormsComponent } from '../template-driven-forms.component';

@NgModule({
  declarations: [
    TemplateDrivenFormsComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialUiModule
  ],

  exports : [
    TemplateDrivenFormsComponent,
    CustomMaterialUiModule
  ]
})
export class TemplateModelModule { }
