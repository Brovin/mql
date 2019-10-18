let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH_USER_DATA': {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }
    default:
      return state;
  }
};

export default authReducer;