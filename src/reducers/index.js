import {applyMiddleware, combineReducers, createStore} from 'redux';
import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;