import { createAction, Action, State } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { Data } from "./data.model";


export const ADD_DATA = '[Data Component] Add'
export const REMOVE_DATA = '[Counter Component] Remove'



// export class AddChart implements Action {
//     readonly type = ADDCHART;
//     constructor(public payload: Data) {
//     }
// }

export class AddData implements Action{
    readonly type = ADD_DATA
    constructor(public payload:Data){}
}

export class RemoveData implements Action{
    readonly type = REMOVE_DATA
    constructor(public payload:number){}
}

export type Actions = AddData | RemoveData