import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store'
import {filterReducer} from './filter.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({filterSt:filterReducer}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
