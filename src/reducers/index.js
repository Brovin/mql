import {combineReducers, createStore} from 'redux';
import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;