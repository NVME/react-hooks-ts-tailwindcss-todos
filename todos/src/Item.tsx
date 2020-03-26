import React, { useState } from 'react'
import TodoItem from './TodoItem'

interface TodoProps {
    todo:TodoItem;
    updateTodo:()=>void;
}

const Todo  = (props:TodoProps)=>{ 
   const {todo} = props; 
   const [checked, setState] = useState(todo.isCompleted);
   const svgDisplay =`fill-current ${!checked ?"hidden":"block"} w-4 h-4 text-gray-700 pointer-events-none`;
  
   return (
       <div className="flex item-center">
            <div className="bg-white border h-5 w-5 rounded border-gray-400 flex flex-shrink-0 justify-center items-center">  
                <input type="checkbox" className=" opacity-0 absolute" 
                                checked={todo.isCompleted} value={todo.id}
                                  onChange={()=>{props.updateTodo();setState(!checked);}}/>
                <svg className={svgDisplay} viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
           </div>
           <span className="pl-2 text-gray-800">{todo.task}</span>
       </div>
   )
}
export default Todo;