import { Component } from '@angular/core';
import { Store, State } from '@ngrx/store';
import {FilterState} from './filter.state'
import * as FilterAction from './filter.actions'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  filter: any;
  data: any;
  // constructor(private store: Store<AppStat>) {
  //   this.message$ = this.store.select('messag');
  // }
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new FilterAction.SetUp());
    this.store.select('filterSt').subscribe(filter=>this.filter=filter);
    // this.store.select('data').subscribe(data=>this.data=data);
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
    // var filter = {search: '',    pageIndex: 1}
    // this.store.dispatch(new FilterAction.GetUser(filter));

  }
}
