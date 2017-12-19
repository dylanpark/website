import React from 'react';

export default class DockContainer extends React.Component {
  render() {
    return (
      <div class='dock-container'>
        <div class='dock-container-inner'>
          <div class='app'></div> 
          <div class='app'></div> 
          <div class='app'></div> 
          <div class='app'></div> 
        </div>
      </div>
    );
  }
}
