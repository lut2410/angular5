import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store'
import {filterReducer} from './filter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FilterEffect } from './filter.effect';
// import { dataReducer } from './data.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({filterSt:filterReducer}),
    EffectsModule.forRoot([FilterEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
