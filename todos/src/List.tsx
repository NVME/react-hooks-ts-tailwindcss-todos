import React from 'react'
import TodoItem from './TodoItem'
import Item from './Item'
import {useDispatch} from 'react-redux'
import {ActionType, DispatchAction} from './store/todo-actions'

type ListProps ={
    items:TodoItem[];
}

const List = (props :ListProps)=>{    
      const dispatch= useDispatch();
      const updateTodo=(id:number)=>{
         const action:DispatchAction= {
             type:ActionType.COMPLETE_TODO,
             payload:{
                 id
             }            
         }
         dispatch(action);
      }
     return (
         <div className="p-2" >
            {
                props.items.map((todo:TodoItem)=>
                <Item key={todo.id} todo={todo} updateTodo={updateTodo}/>
               )
           }
         </div>
     )
}

export default List;
