import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable'
interface myStore {
  message: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message: Observable<string>
  // constructor(private store: Store<AppStat>) {
  //   this.message$ = this.store.select('messag');
  // }
  constructor(private store: Store<myStore>) {
    this.message = this.store.select('message');
  }
  spMess() {
    this.store.dispatch({ type: 'SPANISH' })
  }
  frMess() {
    this.store.dispatch({ type: 'FRENCH' })
  }
}
