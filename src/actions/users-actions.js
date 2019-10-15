export const setUsers = (users) => ({type: 'SET_USERS', users});
export const setTotalUsersCount = (count) => ({type: 'SET_TOTAL_USERS_COUNT', count});
export const setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage});
export const follow = (userId) => ({type: 'FOLLOW', userId});
export const unfollow = (userId) => ({type: 'UNFOLLOW', userId});
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching});