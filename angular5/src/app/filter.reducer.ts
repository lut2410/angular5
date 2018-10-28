import * as FilterActions from './filter.actions'
import { FilterState, initialState, newState } from './filter.state'
export type FilterAction = FilterActions.FilterActions;

export function filterReducer(state: FilterState = initialState, action: FilterAction) {
    console.log(action.type, state)
    switch (action.type) {
        case FilterActions.SET_UP:
            if (action.payload)
                return { ...action.payload }
            else
                return initialState
        case FilterActions.NEXT_PAGE:
            // return {...state}
            // let newState = JSON.parse(JSON.stringify(state));
            let newState=Object.assign({}, state);
            newState.pageIndex++;
            return { ...newState }
        // return {state}
        // return newState({}, state)
        case FilterActions.NEXT_PAGE_COMPLETE:
        // return newState({}, state.pageIndex + 1)
        // return {state}
    }
}