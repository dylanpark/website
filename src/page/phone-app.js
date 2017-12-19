import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions/action-creators';

import Phone from 'components/phone/phone';

function mapStateToProps(state) {
  return {
    ...state  
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const PhoneApp = connect(mapStateToProps, mapDispatchToProps)(Phone);

export default PhoneApp;
