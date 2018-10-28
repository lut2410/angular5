import { Action } from "@ngrx/store";

export const SET_UP = '[FILTER] Set up'
export const NEXT_PAGE = '[FILTER] Next Page'
export const NEXT_PAGE_COMPLETE = '[FILTER] Next Page Complete'

export class SetUp implements Action{
readonly type = SET_UP;
constructor(public payload: any=null){}
}
export class NextPage implements Action{
    readonly type = NEXT_PAGE;
}
export class NextPageComplete implements Action{
    readonly type = NEXT_PAGE_COMPLETE;
    
}
export type FilterActions = SetUp|NextPage|NextPageComplete;