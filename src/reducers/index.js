import {applyMiddleware, combineReducers, createStore} from 'redux';
import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import {reducer as reduxForm} from 'redux-form';
import dialogsReducer from "./dialogs-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: authReducer,
  dialogs: dialogsReducer,
  form: reduxForm,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;