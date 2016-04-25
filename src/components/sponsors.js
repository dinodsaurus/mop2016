import '../styles/sponsors.styl'
import React from 'react';
import Title from './title';
import SponsorList from './sponsors/sponsorList';
import img from '../images/header_img_sponsors.jpg';

class Sponsors extends React.Component {
  render() {
    return (
      <div className="sponsors">
        <Title title="Sponsors" bck={img}/>
        <div className="container">
          <SponsorList title="Main Partners" size={3} list={[1,2,3,4]}/>
          <SponsorList title="Partners" size={4} list={[1,2,3,4]}/>
          <SponsorList title="Media Partners" size={4} list={[1,2,3,4]}/>
          <di className="text">
            <p className="small">Big</p>
            <p className="big">Tnx</p>
            <p className="desc">As a community, we have always prided ourselves on crafting great conference experiences and we wouldn’t be able to do this without the generous support of sponsors. We’re very pleased to present to you the organisations supporting MOP ŠPANCIRFEST 2016:</p>
          </di>
        </div>
      </div>
    );
  }
}

Sponsors.defaultProps = {
};

export default Sponsors;
