import '../styles/schedule.styl'
import React from 'react';
import Title from './title'
import Day from './schedule/day'
import img from '../images/header_img_schedule.jpg'

class Schedule extends React.Component {
  render() {
    return (
      <div className="schedule">
        <Title title="Schedule" bck={img}/>
        <div className="container group">
          <Day/>
        </div>
      </div>
    );
  }
}

Schedule.defaultProps = {
};

export default Schedule;
