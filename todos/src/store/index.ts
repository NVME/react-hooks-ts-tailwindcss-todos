import  rootReducer from './root-reducer';
import {createStore} from 'redux';
import {TodoState } from './todo-state';
 const store=createStore(rootReducer);
export {
    store,
    TodoState
}
