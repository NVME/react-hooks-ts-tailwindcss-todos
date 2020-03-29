import {Action} from 'redux'

interface ActionParemeters {
    task:String,
    id:number,
    completed:boolean
}

export interface DispatchAction extends Action<ActionType> {
    payload: Partial<ActionParemeters>;
}

export enum ActionType {
    ADD_TODO,
    COMPLETE_TODO
}
