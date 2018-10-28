import * as FilterActions from './filter.actions'
import {  initialdataState } from './filter.state'
export type FilterAction = FilterActions.FilterActions;
export function dataReducer(state , action: FilterAction) {
    switch (action.type) {
        case FilterActions.GET_USER:

            console.log(action.type, state,action.payload)
            return { ...state}
    }
}