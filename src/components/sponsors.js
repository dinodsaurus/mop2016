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
            <p className="desc">Many thanks to all who support us and without whom the festival would not exist. As a small organizers special thank you for the financial support goes to Varaždin Tourist Board, Student Union of the University North and our sponsors without whom this festival would not be realized.</p>
          </di>
        </div>
      </div>
    );
  }
}

Sponsors.defaultProps = {
};

export default Sponsors;
