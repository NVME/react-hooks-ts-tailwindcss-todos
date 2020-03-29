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
export interface SummaryState{
    total:number;
    completed:number;
    todo:number;
}
export const initalSummaryState:SummaryState={
    total:2,
    completed:1,
    todo:1
}






