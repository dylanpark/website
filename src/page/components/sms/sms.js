import React from 'react';
import ReactDOM from 'react-dom';

import SMSHeader from 'components/sms/sms-header';
import smsRespond from 'util/sms';

export default class SMS extends React.Component {
  constructor() {
    super();
    this.handleMessage = this.handleMessage.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', function(e) {
      let key = e.which || e.keyCode;
      if (key === 13) {
        this.handleMessage();
      }
    }.bind(this));
  }

  componentDidMount() {
    let smsBody = ReactDOM.findDOMNode(this).querySelector('.view-sms-body');
    smsBody.scrollTop = smsBody.scrollHeight;
  }

  handleMessage() {
    let smsElement = ReactDOM.findDOMNode(this);
    let smsBody = smsElement.querySelector('.view-sms-body');
    let inputEl = smsElement.querySelector('input');
    this.props.updateSMS({message: {
      user: inputEl.value 
    }});
    smsBody.scrollTop = smsBody.scrollHeight;
    const response = smsRespond(inputEl.value.toLowerCase());
    inputEl.value = '';
    setTimeout(function() {
      this.props.updateSMS({message: response});
      smsBody.scrollTop = smsBody.scrollHeight;
    }.bind(this), 300);
  }

  getMessages(smsList) {
    return smsList.map(function(sms, i) {
      const key = Object.keys(sms)[0];
      const className = 'message-' + key;
      return <span key={i} class={className}> {sms[key]} </span>
    })
  }
  
  render() {
    const messages = this.getMessages(this.props.sms);

    return (
      <div class='view-sms'>
        <SMSHeader changeScreen={this.props.changeScreen}/>
        <div class='view-sms-body'>
          {messages}
        </div>
        <div class='view-sms-input'>
          <div class='view-sms-input-container'>
            <input type='text' placeholder='Message'></input>
            <div class='view-sms-input-submit'>
              <i class='ion-arrow-up-c' 
                 aria-hidden='true'
                 onClick={this.handleMessage}></i> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}


