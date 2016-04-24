import React from 'react';
import Title from './title'
import img from '../images/header_img_sponsors.jpg'

class Sponsors extends React.Component {
  render() {
    return (
      <div className="sponsors">
        <Title title="Sponsors" bck={img}/>
      </div>
    );
  }
}

Sponsors.defaultProps = {
};

export default Sponsors;
