import React from 'react'

const Add:React.FC= ()=>{
    return (
     <div className="p-2 mt-10 flex justify-start">
          <input type="text" className="border-2 p-1 w-full rounded" placeholder="plase add a todo here .."/>
          <button className="ml-1 rounded text-white p-1 shadow-xs bg-blue-800" >Add</button>        
     </div>
    )
}

export default Add;