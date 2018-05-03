import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderTemplateComponent } from '../header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderTemplateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
