import '../styles/schedule.styl'
import React from 'react';
import Title from './title';
import Day from './schedule/day';
import img from '../images/header_img_schedule.jpg';

import wednesday from '../data/wednesday.json';
import thursday from '../data/thursday.json';
import friday from '../data/friday.json';
import saturday from '../data/saturday.json';

import wed from '../images/25.05.svg';
import thu from '../images/26.05.svg';
import fri from '../images/27.05.svg';
import sat from '../images/28.05.svg';

class Schedule extends React.Component {
  constructor() {
    super();
    this.state = {
      wednesday: wednesday.schedule,
      thursday: thursday.schedule,
      friday: friday.schedule,
      saturday: saturday.schedule
    };
  }
  componentDidMount() {
    if (this.props.params.day) {
      this.activateDate(this.props.params.id, this.props.params.day);
      const top = document.getElementById('wednesday5').getBoundingClientRect().top;
      window.scroll(0, top);
    }
  }
  activateDate(id, d) {
    let day = this.state[d] || [];
    day.forEach(s => {
      if(s.id == id){
        s.active = true;
      } else {
        s.active = false;
      }
    });
    let res = {};
    res[d] = day;
    this.setState(res);
  }
  render() {
    return (
      <div className="schedule">
        <Title title="Schedule" bck={img}/>
        <div className="container group">
          <Day img={wed} activateDate={this.activateDate.bind(this)} schedule={this.state.wednesday} day="WED" dayFull="wednesday"/>
          <Day img={thu} activateDate={this.activateDate.bind(this)} schedule={this.state.thursday} day="THU" dayFull="thursday"/>
          <Day img={fri} activateDate={this.activateDate.bind(this)} schedule={this.state.friday} day="FRI" dayFull="friday"/>
          <Day img={sat} activateDate={this.activateDate.bind(this)} schedule={this.state.saturday} day="SAT" dayFull="saturday"/>
        </div>
      </div>
    );
  }
}

Schedule.defaultProps = {
};

export default Schedule;
