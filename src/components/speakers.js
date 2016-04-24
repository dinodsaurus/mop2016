import React from 'react';
import Title from './title';
import img from '../images/header_img_speaker.jpg';
class Speakers extends React.Component {
  render() {
    return (
      <div className="speakers">
        <Title title="Speakers" bck={img}/>
      </div>
    );
  }
}

Speakers.defaultProps = {
};

export default Speakers;
