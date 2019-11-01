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
    case 'SAVE_PHOTO_SUCCESS': {
      return {...state, profile: {...state.profile, photos: action.photos}}
    }
    default:
      return state;
  }
};

export default profileReducer;