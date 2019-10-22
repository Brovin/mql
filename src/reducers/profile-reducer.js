let initialState = {
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_PROFILE': {
      return {...state, profile: action.profile}
    }
    case 'SET_STATUS': {
      return {...state, status: action.status}
    }
    default:
      return state;
  }
};

export default profileReducer;