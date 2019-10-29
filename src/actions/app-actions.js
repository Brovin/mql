import {getAuthUserData} from "./auth-actions";

export const initializedSuccess = () => ({type: 'INITIALIZED_SUCCESS'});

export const initializeApp = () => async (dispatch) => {
  let promise = dispatch(getAuthUserData());
  await Promise.all([promise]);
  dispatch(initializedSuccess())
};