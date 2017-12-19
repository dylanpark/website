import * as actions from 'constants/action';

const initialState = {
  appView: true
};

function reducer(state=initialState, action) {
  switch (action.type) {
    case actions.launchApp: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
