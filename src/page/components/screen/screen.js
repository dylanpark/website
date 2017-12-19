import React from 'react';

import ScreenHeader from 'components/screen/screen-header';
import AppContainer from 'components/app-container/app-container';
import DockContainer from 'components/dock-container/dock-container';

export default class Screen extends React.Component {
  getScreen(appView) {
    if (!appView) {
      return (
        <div>
          <AppContainer/>
          <DockContainer/>
        </div>
      );
    }
    return (
      <div></div>
    );
  }

  render() {
    var screenView = this.getScreen(this.props.appView);
    return (
      <div class='screen'>
        <ScreenHeader/>
        {screenView}
      </div>
    );
  }
}
