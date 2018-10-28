export interface FilterState{
    search:string
    pageIndex:number
}
export const initialState: FilterState = {
    search: '',
    pageIndex: 1
} 
export const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}