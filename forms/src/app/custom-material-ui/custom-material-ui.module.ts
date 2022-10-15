import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatInputModule,
    MatTableModule
  ],

  exports : [
    CommonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatInputModule,
    MatTableModule
]
})
export class CustomMaterialUiModule { }
