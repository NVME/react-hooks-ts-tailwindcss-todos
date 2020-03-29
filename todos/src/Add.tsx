import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DispatchAction ,ActionType} from './store/todo-actions'
const Add:React.FC= ()=>{
    const dispatch= useDispatch();
    const [task , setTask]= useState("");
    const submit=()=>{
        const action :DispatchAction ={
             type:ActionType.ADD_TODO,
             payload:{
                 task:task
             }
        };
        dispatch(action);
        setTask('');
    }
    return (
     <div className="p-2 mt-10 flex justify-start">
          <input type="text" className="border-2 p-1 w-full rounded" 
             value={task} onChange={(event)=>setTask(event.target.value)}
                  placeholder="plase add a todo here .."/>
          <button className="ml-1 rounded text-white p-1 shadow-xs bg-blue-800" onClick={submit} >Add</button>        
     </div>
    )
}

export default Add;