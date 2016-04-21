import '../styles/schedule.styl'
import React from 'react';
import Header from './header'
import Footer from './footer'
import Title from './schedule/title'
import Day from './schedule/day'

class Schedule extends React.Component {
  render() {
    return (
      <div className="schedule">
        <Header/>
        <Title/>
        <div className="container group">
          <Day/>
        </div>
        <Footer/>
      </div>
    );
  }
}

Schedule.defaultProps = {
};

export default Schedule;
