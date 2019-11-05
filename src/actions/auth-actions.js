import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: 'SET_AUTH_USER_DATA',
  payload: {id, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: 'GET_CAPTCHA_URL_SUCCESS',
  payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authApi.me();
  if (response.data.resultCode === 0) {
    let {id, email, login} = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authApi.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
      dispatch(stopSubmit("login", {_error: message}));
    }
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityApi.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
  let response = await authApi.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};