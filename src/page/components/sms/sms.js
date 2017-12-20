import React from 'react';

import SMSHeader from 'components/sms/sms-header';

export default class SMS extends React.Component {
  uploadMessage() {
    
  }

  render() {
    console.log(this.props);

    return (
      <div class='view-sms'>
        <SMSHeader changeScreen={this.props.changeScreen}/>
        <div class='view-sms-body'>
          
        </div>
        <div class='view-sms-input'>
          <div class='view-sms-input-container'>
            <input type='text' placeholder='Message'></input>
            <div class='view-sms-input-submit'>
              <i class='ion-arrow-up-c' 
                 aria-hidden='true'
                 onClick={function(){}}></i> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}


