import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem';

interface todosStore{
    todos:{ items:TodoItem[]}
  }
export const Summary=()=>{
    const  todos=useSelector((state:todosStore)=> state.todos.items);   
    
    return (
        <div className=" text-gray-700 p-2 ">
           Total: {todos.length} | Completed: {todos.filter(t=>t.isCompleted).length} | Todo:{todos.filter(t=>t.isCompleted).length}
        </div>
    )
}

