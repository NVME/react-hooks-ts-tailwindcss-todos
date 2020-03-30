import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem';
import {RootState} from './store'
export const Summary=()=>{
    const  summary=useSelector((state:RootState)=> state.summary);     
    return (
        <div className=" text-gray-700 p-2 ">
           Total: {summary.total} | Completed: {summary.completed} | Todo:{summary.todo}
        </div>
    )
}

