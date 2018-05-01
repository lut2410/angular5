import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store'
import {myReducer} from './my.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({message:myReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
