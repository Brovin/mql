import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: 'SET_AUTH_USER_DATA',
  payload: {id, email, login, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authApi.me();
  if (response.data.resultCode === 0) {
    let {id, email, login} = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authApi.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    dispatch(stopSubmit("login", {_error: message}));
  }
};

export const logout = () => async (dispatch) => {
  let response = await authApi.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};