import '../../styles/day.styl'
import React from 'react'

import img from '../../images/25.05.svg'
import Session from './session'
class Day extends React.Component {
  render() {
    const image = {
      'backgroundImage': 'url(' + img + ')'
    }
    return (
      <div className="day">
        <div className="head">
          <h3>Wed</h3>
          <div className="img" style={image}></div>
        </div>
        <div className="sessions">
          <Session/>
          <Session/>
          <Session/>
        </div>
      </div>
    );
  }
}

Day.defaultProps = {
};

export default Day;
