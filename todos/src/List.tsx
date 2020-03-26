import React from 'react'
import TodoItem from './TodoItem'
import Item from './Item'

type ListProps ={
    items:TodoItem[];
}

const List = (props :ListProps)=>{    
      
     return (
         <div className="p-2" >
            {
                props.items.map((todo:TodoItem)=>
                <Item key={todo.id} todo={todo} updateTodo={()=>{}}/>
               )
           }
         </div>
     )
}

export default List;
