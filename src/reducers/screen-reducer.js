import * as actions from 'constants/action';
import * as apps from 'constants/app';

const initialState = {
  app: apps.sms
};

function screenReducer(state=initialState, action) {
  switch (action.type) {
    case actions.changeScreen: {
      return {
        ...state,
        app: action.app
      };
    }
    default: {
      return state;
    }
  }
}

export default screenReducer;
