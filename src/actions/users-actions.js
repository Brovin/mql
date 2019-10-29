import {usersApi} from "../api/api";

export const setUsers = (users) => ({type: 'SET_USERS', users});
export const setTotalUsersCount = (count) => ({type: 'SET_TOTAL_USERS_COUNT', count});
export const setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage});
export const followSuccess = (userId) => ({type: 'FOLLOW', userId});
export const unfollowSuccess = (userId) => ({type: 'UNFOLLOW', userId});
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
  isFetching,
  userId
});

export const getUsers = (page, count) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await usersApi.getUsers(page, count);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

export const follow = (id) => async (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, id));
  let data = await usersApi.follow(id);
  if (data.resultCode === 0) {
    dispatch(followSuccess(id));
  }
  dispatch(toggleIsFollowingProgress(false, id));
};

export const unfollow = (id) => async (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, id));
  let data = await usersApi.unfollow(id);
  if (data.resultCode === 0) {
    dispatch(unfollowSuccess(id));
  }
  dispatch(toggleIsFollowingProgress(false, id));
};