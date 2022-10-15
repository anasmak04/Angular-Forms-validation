import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomMaterialUiModule } from './custom-material-ui/custom-material-ui.module';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialUiModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
