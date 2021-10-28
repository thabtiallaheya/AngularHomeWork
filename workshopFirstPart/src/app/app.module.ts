import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormUserComponentComponent } from './form-user-component/form-user-component.component';
import { MainUserComponentComponent } from './main-user-component/main-user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUserComponentComponent,
    MainUserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
