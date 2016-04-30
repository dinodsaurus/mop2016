import '../../styles/day.styl'
import React from 'react'

import img from '../../images/25.05.svg'
import Session from './session'
class Day extends React.Component {
  renderSession(session, i){
    return <Session key={i} session={session}/>;
  }
  render() {
    const image = {
      'backgroundImage': 'url(' + img + ')'
    }
    return (
      <div className="day">
        <div className="head">
          <h3>{this.props.day}</h3>
          <div className="img" style={image}></div>
        </div>
        <div className="sessions">
          {this.props.schedule.map(this.renderSession)}
        </div>
      </div>
    );
  }
}

Day.defaultProps = {
};

export default Day;
