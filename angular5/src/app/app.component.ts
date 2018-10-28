import { Component } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable'
import {FilterState} from './filter.state'
import * as FilterAction from './filter.actions'

interface AppState {
  filterSt:any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  filter: FilterState;
  // constructor(private store: Store<AppStat>) {
  //   this.message$ = this.store.select('messag');
  // }
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new FilterAction.SetUp());
    this.store.select('filterSt').subscribe(filter=>this.filter=filter);
  }
  setupDefault() {
    this.store.dispatch(new FilterAction.SetUp())
  }
  setupFilter()
  {
    let filterVariables = {} as FilterState;
    filterVariables.search='search string';
    filterVariables.pageIndex=3;
    this.store.dispatch(new FilterAction.SetUp(filterVariables))
  }
  scroll() {
    this.store.dispatch(new FilterAction.NextPage())
  }
}
