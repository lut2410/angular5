import { Action } from "@ngrx/store";

export const SET_UP = '[FILTER] Set up'
export const NEXT_PAGE = '[FILTER] Next Page'
export const GET_USER = '[USER] Get User'

export class SetUp implements Action {
    readonly type = SET_UP;
    constructor(public payload: any = null) { }
}
export class NextPage implements Action {
    readonly type = NEXT_PAGE;
    constructor(public payload: any = null) { }
}
export class GetUser implements Action {
    readonly type = GET_USER;
    constructor(public payload) {
     }

}
export type FilterActions = SetUp | NextPage | GetUser;