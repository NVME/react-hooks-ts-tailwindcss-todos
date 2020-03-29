import { combineReducers } from 'redux';
import {todoReducer, summaryReducer} from './todo-reducer';
const rootReducer = combineReducers({ 
  todos: todoReducer,
  summary:summaryReducer
});

export default rootReducer;