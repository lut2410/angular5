import {Action} from '@ngrx/store'

export function myReducer(state: string = 'He nho world', action: Action){
    console.log(action.type,state);
    switch(action.type){
        case 'SPANISH':
        return state = 'Hola mundo'
        case 'FRENCH':
        return state = 'Bonjour le monde'
        default:
        return state
    }
}