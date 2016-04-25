import '../styles/speakers.styl';

import React from 'react';
import Title from './title';
import img from '../images/header_img_speaker.jpg';
import SpeakerList from './speakers/speakerList';
class Speakers extends React.Component {
  render() {
    return (
      <div className="speakers">
        <Title title="Speakers" bck={img}/>
        <div className="container">
          <SpeakerList list={[1,2,3,4,5,6]}/>
        </div>
      </div>
    );
  }
}

Speakers.defaultProps = {
};

export default Speakers;
