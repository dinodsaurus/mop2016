import '../styles/schedule.styl'
import React from 'react';
import Title from './title';
import Day from './schedule/day';
import img from '../images/header_img_schedule.jpg';

import wednesday from '../wednesday.json';
import thursday from '../thursday.json';
import friday from '../friday.json';
class Schedule extends React.Component {
  render() {
    return (
      <div className="schedule">
        <Title title="Schedule" bck={img}/>
        <div className="container group">
          <Day schedule={wednesday.schedule} day="WED"/>
          <Day schedule={thursday.schedule} day="THU"/>
          <Day schedule={friday.schedule} day="FRI"/>
        </div>
      </div>
    );
  }
}

Schedule.defaultProps = {
};

export default Schedule;
