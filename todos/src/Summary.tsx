import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem';
interface summaryStore{
   summary: {
        total:number;
        completed:number;
        todo:number
    }
   
  }
export const Summary=()=>{
    const  summary=useSelector((state:summaryStore)=> state.summary); 
    console.log(summary);
    return (
        <div className=" text-gray-700 p-2 ">
           Total: {summary.total} | Completed: {summary.completed} | Todo:{summary.todo}
        </div>
    )
}

