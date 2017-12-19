import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.launchApp = this.launchApp.bind(this);
  }

  launchApp(app) {
    if (app) {
      this.props.changeScreen({
        app  
      });
    }
  }

  render() {
    const className = 'app ' + this.props.app;
    return (
      <div class={className} 
           onClick={() => {this.launchApp(this.props.app)}}></div>
    );
  }
}
