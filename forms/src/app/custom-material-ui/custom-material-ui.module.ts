import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatInputModule,
    MatTableModule
  ],

  exports : [
    NavbarComponent,
    CommonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatInputModule,
    MatTableModule
]
})
export class CustomMaterialUiModule { }
