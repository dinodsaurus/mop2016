import React from 'react';
import Title from './title'
import img from '../images/header_img_speaker.jpg'

class Spancirfest extends React.Component {
  render() {
    return (
      <div className="spancirfest">
        <Title title="Spancirfest" bck={img}/>
      </div>
    );
  }
}

Spancirfest.defaultProps = {
};

export default Spancirfest;
