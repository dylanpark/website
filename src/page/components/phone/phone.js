import React from 'react';
import PhoneHeader from 'components/phone/phone-header';

export default class Phone extends React.Component {
  render() {
    return (
      <div class='phone'>
        <div class='phone-notch'></div>
        <div class='phone-inner'>
          <PhoneHeader/>
        </div>
      </div>
    )
  }
}

