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
              <div className="small">
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
              <div className="small grid">
                <div className="half">
                  <h4>Venues</h4>
                  <a>Hrvatsko narodno kazalište u Varaždinu</a>
                  <h4>Food</h4>
                  <a>Anglesu restourant</a>
                  <h4>Sleep</h4>
                  <a>Hostel Varaždin</a>
                  <h4>Sleep</h4>
                  <a>Hostel Maltar</a>
                </div>
                <div className="half">
                  <h4>Party</h4>
                  <a>Podrumska scena Zvonimr Rogoz</a>
                  <h4>Food</h4>
                  <a>Santa Maria</a>
                  <h4>Sleep</h4>
                  <a>Hotel Adria</a>
                  <h4>Sleep</h4>
                  <a>Hotel Turist</a>
                </div>
              </div>
            </div>
          </div>
          <img src={img3}/>
          <div className="section">
            <div className="item">
              <h3>Core Team</h3>
            </div>
            <div className="item">
              <div className="small grid team">
                <div className="half">
                  <h4>Organizatori</h4>
                  <p>Udruga MOP</p>
                  <p>Turistička zajednica grada Varaždina</p>
                  <h4>Uži organizacijski tim</h4>
                  <p>Fran Mubrin, kreaticni i art direktor</p>
                  <p>Mihael Miklošić, koordinator projekta</p>
                  <p>Oliver Potočnik, koordinator projekta</p>
                  <h4>Programska suradnja</h4>
                  <p>Marijo Janković</p>
                  <p>Dino Trojak</p>
                  <h4>Vizualni identitet</h4>
                  <p>Marko Hrastovec</p>
                  <p>Fran Mubrin(web)</p>
                </div>
                <div className="half">
                  <h4>Web programing</h4>
                  <p>Dino Trojak</p>
                  <h4>Contact</h4>
                  <p>mopfest@gmail.com</p>
                  <p>franmubrin@gmail.com</p>
                  <p>+385 95 398 6599</p>
                  <h4>Contact TZGV</h4>
                  <p>info@spancirfest.com</p>
                  <p>042 210 987</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Schedule.defaultProps = {
};

export default Schedule;
