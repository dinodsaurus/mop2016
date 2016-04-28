import '../styles/about.styl'
import React from 'react';
import Title from './title'
import img1 from '../images/about.png';
import img2 from '../images/about2.png';
import img3 from '../images/about3.png';

class Schedule extends React.Component {
  render() {
    return (
      <div className="about">
        <Title title="About"/>
        <div className="container group">
          <div className="titleTxt">
            <h2>MOP ŠPANCIRFEST
                is a multimedia festival.
            </h2>
            <p>Program festivala obuhvaća predavanja, tjedne radionice, izložbe, video projekcije, interaktivne instalacije, performanse, filmske projekcije te audio-vizualne instalacije integrirane u njegov glazbeni dio. Od ove godine partner Udruge MOP i suorganizator festivala multimedije je Turistička zajednica grada Varaždina (TZGV).</p>
          </div>
          <img src={img1}/>
          <div className="section">
            <div className="item">
              <h3>History</h3>
            </div>
            <div className="item">
              <p>Festival je do danas održan 4 puta kao godišnji regionalni festival kroz koji se promiče multimedija i digitalna kultura s naglaskom na razmjenu znanja i kreativno korištenje novih tehnologija u umjetnosti, znanosti i dizajnu.</p>
              <div className="past">
                <h4>Past editions</h4>
                <a>12</a>
                <a>13</a>
                <a>14</a>
                <a>15</a>
              </div>
            </div>
          </div>
          <img src={img2}/>
          <div className="section">
            <div className="item">
              <h3>Location</h3>
            </div>
            <div className="item">
              <p>Festival je do danas održan 4 puta kao godišnji regionalni festival kroz koji se promiče multimedija i digitalna kultura s naglaskom na razmjenu znanja i kreativno korištenje novih tehnologija u umjetnosti, znanosti i dizajnu.</p>
            </div>
          </div>
          <img src={img3}/>
        </div>
      </div>
    );
  }
}

Schedule.defaultProps = {
};

export default Schedule;
