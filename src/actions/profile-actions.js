import {profileApi} from "../api/api";

export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});

export const getUserProfile = (id) => (dispatch) => {
  profileApi.getProfile(id)
    .then(response => {
      dispatch(setUserProfile(response.data));
    })
};