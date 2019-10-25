let initialState = {
  initialized: false
};

let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export default appReducer;