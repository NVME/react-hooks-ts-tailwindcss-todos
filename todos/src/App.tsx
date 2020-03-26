import  React from "react";
import ReactDOM from "react-dom";
import Add from "./Add";
import List from './List';
import TodoItem from './TodoItem';
import Redux from 'redux';
import {store} from './store';
import { Provider, useSelector} from "react-redux";

interface todosStore{
  todos:{ items:TodoItem[]}
}

function App()
{
    const  todos=useSelector((state:todosStore)=> state.todos.items);    
    return (
      <div className="flex justify-center items-center"> 
           <div className="m-5"  >
            <h2 className="text-center text-gray-700 text-5xl">My Todos</h2>
            <Add/>
            <List items={todos} />
           </div>
      </div>

    )
}

ReactDOM.render(
   <Provider store={store}>
    <App/>
   </Provider>
, document.getElementById("app")

)