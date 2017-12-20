import React from 'react';

import * as apps from 'constants/app';
import ScreenHeader from 'components/screen/screen-header';
import AppContainer from 'components/app-container/app-container';
import DockContainer from 'components/dock/dock-container';

import MainSMS from 'components/sms/main-sms';

export default class Screen extends React.Component {
  constructor() {
    super();
    this.getScreen = this.getScreen.bind(this);
  }

  getScreen(app) {
    const {...changeScreen} = this.props;
    switch(app) {
      case apps.sms: {
        return <MainSMS {...changeScreen}/>;
      }
      default: {
        return (
          <div>
            <AppContainer {...changeScreen}/>
            <DockContainer {...changeScreen}/>
          </div>
        );
      }
    }
  }

  render() {
    console.log(this.props);
    const screenView = this.getScreen(this.props.app);
    const isApp = this.props.app !== apps.home;
    const className = isApp ? 'screen' : 'screen screen-home';
    return (
      <div class={className}>
        <ScreenHeader isApp={isApp}/>
        {screenView}
      </div>
    );
  }
}
