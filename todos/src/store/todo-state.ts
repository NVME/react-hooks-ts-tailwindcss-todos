import TodoItem from '../TodoItem';
export interface TodoState {
    items:TodoItem[];
}
export const initalTodoState:TodoState={
    items:[
                {id:1, task :"this is my first todo !",isCompleted:true},
                {id:2, task :"this is my second todo !",isCompleted:false}
          ]
}