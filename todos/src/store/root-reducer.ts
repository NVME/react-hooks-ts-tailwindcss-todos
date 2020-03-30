import { combineReducers } from 'redux';
import {todoReducer, summaryReducer} from './todo-reducer';
export const rootReducer = combineReducers({ 
  todos: todoReducer,
  summary:summaryReducer
});

