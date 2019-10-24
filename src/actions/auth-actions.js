import {authApi} from "../api/api";

export const setAuthUserData = (id, email, login, isAuth) => ({type: 'SET_AUTH_USER_DATA', payload: {id, email, login, isAuth}});

export const getAuthUserData = () => (dispatch) => {
  authApi.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authApi.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    })
};

export const logout = () => (dispatch) => {
  authApi.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
};