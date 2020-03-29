
import {TodoState ,initalTodoState} from './todo-state';
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
        return initalTodoState;
   }     

}