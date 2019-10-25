import {getAuthUserData} from "./auth-actions";

export const initializedSuccess = () => ({type: 'INITIALIZED_SUCCESS'});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
};