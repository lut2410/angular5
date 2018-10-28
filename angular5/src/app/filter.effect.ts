import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Action, Store, select } from "@ngrx/store";
import * as FilterActions from './filter.actions'
import { Observable } from "rxjs/Rx";
@Injectable()
export class FilterEffect {
    constructor(private actions$: Actions, private store: Store<AppState>) {
    }
    @Effect()
    SetFilterToGetUsers(): Observable<Action> {
        return this.actions$
            .ofType(FilterActions.SET_UP)
            .withLatestFrom(this.store, (action, state) => state.filterSt)

            .switchMap(payload => [new FilterActions.GetUser(payload)])

            // .concatMap(payload => [new FilterActions.NextPage(payload)])
    }

    @Effect()
    NextPageToGetUsers(): Observable<Action> {
        return this.actions$
            .ofType(FilterActions.NEXT_PAGE)
            .withLatestFrom(this.store, (action, state) => state.filterSt)

            .exhaustMap(payload => [new FilterActions.GetUser(payload)])

            // .concatMap(payload => [new FilterActions.NextPage(payload)])
    }
}