let initialState = {
  messages: [
    {
      id: 1,
      message: 'hi1'
    },
    {
      id: 2,
      message: 'hi2'
    },
    {
      id: 3,
      message: 'hi3'
    }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 5, message: body}]
      };
    default:
      return state;
  }
};

export default dialogsReducer;