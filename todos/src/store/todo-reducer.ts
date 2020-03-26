
import TodoItem from '../TodoItem';

export interface TodoState {
    items:TodoItem[];
}
export const ADD_TODO="ADD_TODO";
interface AddTodoAction{
   type: typeof ADD_TODO;
   data:String;
}

export type TodoActionType = AddTodoAction;

export const initalTodoState:TodoState={
    items:[
                {id:1, task :"this is my first todo !",isCompleted:true},
                {id:2, task :"this is my second todo !",isCompleted:false}
          ]
}

export const todoReducer =(state=initalTodoState,action:TodoActionType):TodoState=>{
   return initalTodoState;
}