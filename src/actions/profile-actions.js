import {profileApi} from "../api/api";

export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});
export const setStatus = (status) => ({type: 'SET_STATUS', status});

export const getUserProfile = (id) => (dispatch) => {
  profileApi.getProfile(id)
    .then(response => {
      dispatch(setUserProfile(response.data));
    })
};

export const getStatus = (id) => (dispatch) => {
  profileApi.getStatus(id)
    .then(response => {
      dispatch(setStatus(response.data));
    })
};

export const updateStatus = (status) => (dispatch) => {
  profileApi.updateStatus(status)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
};