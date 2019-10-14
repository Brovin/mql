import {combineReducers, createStore} from 'redux';
import usersReducer from './users-reducer';

let reducers = combineReducers({
  users: usersReducer
});

let store = createStore(reducers);

export default store;