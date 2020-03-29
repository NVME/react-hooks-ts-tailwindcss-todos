
import {TodoState ,initalTodoState, SummaryState, initalSummaryState} from './todo-state';
import TodoItem from '../TodoItem';
import {DispatchAction,ActionType} from './todo-actions'


export const todoReducer =(state=initalTodoState,action:DispatchAction):TodoState=>{
   switch (action.type) {
      case ActionType.ADD_TODO: {         
         const count= state.items.length;
         const newTask: TodoItem=  {
             id:count+1,
             task:action.payload.task,
             isCompleted:false
         };
         return {...state, items:[...state.items, newTask]};         
      }
      case ActionType.COMPLETE_TODO:{
         const {id} = action.payload;                
         return {...state, items:state.items.map(
            t => t.id===id ?{...t,isCompleted:!t.isCompleted} :t
            )};      
      } 
         
      default:
        return state;
   }     
  
}

export const summaryReducer= (state=initalSummaryState, action :DispatchAction):SummaryState=>{
   switch (action.type) {
      case ActionType.ADD_TODO: 
         
         return {
            ...state,
            total:state.total+1,
            todo:state.todo+1,
            
         }
      case ActionType.COMPLETE_TODO:        
         return {
            ...state,
            todo:action.payload.completed?state.todo-1:state.todo+1,
            completed:action.payload.completed?state.completed+1:state.completed-1,            
         }
      default: return state;
   }
}