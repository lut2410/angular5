import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable'
import {Post} from './post'
import * as PostActions from './post.actions'

interface AppState {
  post:Post
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post: Observable<Post>
  text
  // constructor(private store: Store<AppStat>) {
  //   this.message$ = this.store.select('messag');
  // }
  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
  }
  editText() {
    this.store.dispatch(new PostActions.EditText(this.text))
  }
  reset() {
    this.store.dispatch(new PostActions.Reset())
  }
  upvote() {
    this.store.dispatch(new PostActions.Upvote())
  }
  downvote() {
    this.store.dispatch(new PostActions.Downvote())
  }
}
