import {usersApi} from "../api/api";

export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});

export const getUserProfile = (id) => (dispatch) => {
  usersApi.getProfile(id)
    .then(response => {
      dispatch(setUserProfile(response.data));
    })
};