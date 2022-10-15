import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomMaterialUiModule } from './custom-material-ui/custom-material-ui.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ReactiveModelModule } from './reactive-forms/reactive-model/reactive-model.module';
import { TemplateModelModule } from './template-driven-forms/template-model/template-model.module';
@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialUiModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveModelModule,
    TemplateModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
