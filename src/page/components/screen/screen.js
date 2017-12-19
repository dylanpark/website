import React from 'react';

import * as apps from 'constants/app';
import ScreenHeader from 'components/screen/screen-header';
import AppContainer from 'components/app-container/app-container';
import DockContainer from 'components/dock/dock-container';

export default class Screen extends React.Component {
  constructor() {
    super();
    this.getScreen = this.getScreen.bind(this);
  }

  getScreen(app) {
    switch(app) {
      case apps.sms: {
        return <div></div>;
      }
      default: {
        return (
          <div>
            <AppContainer changeScreen={this.props.changeScreen}/>
            <DockContainer changeScreen={this.props.changeScreen}/>
          </div>
        );
      }
    }
  }

  render() {
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
