import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as smsActions from 'actions/sms';

import SMS from 'components/sms/sms';

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(smsActions, dispatch);
}

const MainSMS = connect(mapStateToProps, mapDispatchToProps)(SMS);

export default MainSMS;
