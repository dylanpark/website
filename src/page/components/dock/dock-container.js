import React from 'react';

import * as apps from 'constants/app';
import App from 'components/app/app';

export default class DockContainer extends React.Component {
  render() {
    const appNames = [apps.sms, apps.trifacta, apps.hitch, apps.traderev];
    const appList = appNames.map(function(app, i) {
      return <App key={i} app={app} changeScreen={this.props.changeScreen}/>
    }.bind(this));

    return (
      <div class='dock-container'>
        <div class='dock-container-inner'>
          {appList}
        </div>
      </div>
    );
  }
}
