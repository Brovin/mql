let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH_USER_DATA':
    case 'GET_CAPTCHA_URL_SUCCESS': {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state;
  }
};

export default authReducer;