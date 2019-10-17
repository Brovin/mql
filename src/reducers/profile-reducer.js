let initialState = {
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_PROFILE': {
      return {...state, profile: action.profile}
    }
    default:
      return state;
  }
};

export default profileReducer;