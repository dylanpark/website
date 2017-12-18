import React from 'react';

export default class PhoneHeader extends React.Component {
  componentWillMount() {
    this.setState({ 
      time: this._formatTime()
    });
    this._getTime();
  }

  _getTime() {
    clearTimeout(this.renderTime);
    this.renderTime = setTimeout(function() {
      this.setState({
        time: this._formatTime()
      });
      this._getTime();
    }.bind(this), 10000);
  }

  _formatTime() {
    var date = new Date();
    var time = date.getHours() === 12 ? 12 : date.getHours() % 12 + 
               ':' + 
               ('0' + date.getMinutes()).slice(-2);
    return time;
  }

  render() {
    return (
      <div class='phone-header'>
          <span class='time'> {this.state.time} </span>
          <span class='status'> 
            <i class="fa fa-signal" aria-hidden="true"></i>
            <i class="fa fa-wifi" aria-hidden="true"></i>
            <i class="fa fa-battery-full" aria-hidden="true"></i>
          </span>
      </div>
    );
  }
}
