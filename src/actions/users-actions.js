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

export const getUsers = (page, count) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.getUsers(page, count)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      })
  }
};

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, id));
    usersApi.follow(id)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(id));
        }
      });
    dispatch(toggleIsFollowingProgress(false, id));
  }
};

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, id));
    usersApi.unfollow(id)
      .then(data => {
        if(data.resultCode === 0) {
          dispatch(unfollowSuccess(id));
        }
        dispatch(toggleIsFollowingProgress(false, id));
      });
  }
};