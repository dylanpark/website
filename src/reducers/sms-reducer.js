import * as actions from 'constants/action';

const initialState = {
  messages: []
}

function smsReducer(state=initialState, action) {
  switch (action.type) {
    case actions.uploadeMessage: {
      return {
        messages: [
          ...state.messages,
          action.message
        ]
      }
    }
    default: {
      return state;
    }
  }
}

export default smsReducer;
