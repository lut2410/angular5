import * as FilterActions from './filter.actions'
import { FilterState, initialState, newState, initialdataState } from './filter.state'
export type FilterAction = FilterActions.FilterActions;

export function filterReducer(state: FilterState = initialState, action: FilterAction) {
    console.log(action.type,'old state',state,'payload',action.payload )
    switch (action.type) {
        case FilterActions.SET_UP:
            if (action.payload)
                return { ...action.payload }
            else
                return {...initialState}
        case FilterActions.NEXT_PAGE:
            let newState = Object.assign({}, state);
            newState.pageIndex++;
            return { ...newState }

        case FilterActions.GET_USER:
            return { ...state }

    }
}

