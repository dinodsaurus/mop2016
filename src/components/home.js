import '../styles/home.styl';
import React from 'react';

import workshops from '../images/workshops_home.svg';
import lectures from '../images/lectures_home.svg';
import exhibitions from '../images/exibition_home.svg';

import workshopVideo2 from '../videos/workshop_2.mp4';

import lecturesVideo from '../videos/lectures_1.mp4';

import exhibitionsVideo2 from '../videos/exibition_2.mp4';
class AppComponent extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="workshops">
            <img src={workshops}/>
            <div className="video video1">
              <video autoPlay loop="loop" muted="muted" volume="0" src={workshopVideo2} type="video/mp4"/>
            </div>
          </div>
          <div className="lectures">
            <img src={lectures}/>
            <div  className="video video1">
              <video autoPlay loop="loop" muted="muted" volume="0" src={lecturesVideo} type="video/mp4"/>
            </div>
          </div>
          <div className="exhibitions">
            <img src={exhibitions}/>
            <div className="video video1">
              <video autoPlay loop="loop" muted="muted" volume="0" src={exhibitionsVideo2} type="video/mp4"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
