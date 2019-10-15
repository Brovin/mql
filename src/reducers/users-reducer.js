let initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 50,
  currentPage: 1
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLOW': {
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        })
      }
    }
    case 'UNFOLLOW': {
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        })
      }
    }
    case 'SET_USERS': {
      return {...state, users: action.users}
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return {...state, totalUsersCount: action.count}
    }
    case 'SET_CURRENT_PAGE': {
      return {...state, currentPage: action.currentPage}
    }
    default:
      return state;
  }
};

export default usersReducer;