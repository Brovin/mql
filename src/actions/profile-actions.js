import {profileApi} from "../api/api";

export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});
export const setStatus = (status) => ({type: 'SET_STATUS', status});

export const getUserProfile = (id) => async (dispatch) => {
  let response = await profileApi.getProfile(id);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (id) => async (dispatch) => {
  let response = await profileApi.getStatus(id);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileApi.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};