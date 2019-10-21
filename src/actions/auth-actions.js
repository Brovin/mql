import {authApi} from "../api/api";

export const setAuthUserData = (id, email, login) => ({type: 'SET_AUTH_USER_DATA', data: {id, email, login}});

export const getAuthUserData = () => (dispatch) => {
  authApi.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
};