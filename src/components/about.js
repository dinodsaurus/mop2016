import '../styles/about.styl'
import React from 'react';
import Paralax from './paralax/paralax'
import img1 from '../images/about.png';
import img2 from '../images/about2.png';
import img3 from '../images/about3.png';

class Schedule extends React.Component {
  render() {
    return (
      <div className="about">
        <Paralax/>
        <div className="container group">
          <div className="titleTxt">
            <h2>MOP ŠPANCIRFEST
                is a multimedia festival.
            </h2>
            <p>The festival is free and includes lectures, weekly workshops, exhibitions, video screenings, interactive installations, performances, films and audio-visual installations integrated into his music part. Starting this year, partner of MOP Association and co-organizer of multimedia festival is Varaždin Tourist Board. Festival program is free.</p>
          </div>
          <img src={img1}/>
          <div className="section">
            <div className="item">
              <h3>History</h3>
            </div>
            <div className="item">
              <p>The festival has so far held four times as annual regional festival through which promotes the multimedia and digital culture, with an emphasis on exchange of knowledge and creative use of new technologies in art, science and design.</p>
              <div className="small">
                <h4>Past editions</h4>
                <a href="http://2013.mop-fest.com/">13</a>
                <a href="http://2014.mop-fest.com/">14</a>
                <a href="http://2013.mop-fest.com/">15</a>
              </div>
            </div>
          </div>
          <img src={img2}/>
          <div className="section">
            <div className="item">
              <h3>Location</h3>
            </div>
            <div className="item">
              <p>The festival has so far held four times as annual regional festival through which promotes the multimedia and digital culture, with an emphasis on exchange of knowledge and creative use of new technologies in art, science and design.</p>
              <div className="small grid">
                <div className="half">
                  <h4>Venues</h4>
                  <a href="https://www.google.hr/maps/place/HRVATSKO+NARODNO+KAZALI%C5%A0TE+U+VARA%C5%BDDINU/@46.3057008,16.3351257,17z/data=!3m1!4b1!4m2!3m1!1s0x4768aad0b4d1687f:0x45ba01edd71338f6?shorturl=1">Croatian National Theatre in Varaždin</a>
                  <h4>Venues</h4>
                  <a href="https://goo.gl/maps/qByKtYiow162">Palača Herzer</a>
                  <h4>Food</h4>
                  <a href="https://goo.gl/maps/rzuxxCTZYZ12">Anglesu restourant</a>
                  <h4>Sleep</h4>
                  <a href="http://www.tourism-varazdin.hr/en/accommodation/">City Hostels</a>
                </div>
                <div className="half">
                  <h4>Party</h4>
                  <a href="https://www.facebook.com/scenarogoz/">Podrumska scena Zvonimr Rogoz</a>
                  <h4>Food</h4>
                  <a href="https://goo.gl/maps/zy52JmjjJZG2">Santa Maria</a>
                  <h4>Caffe</h4>
                  <a href="http://www.tourism-varazdin.hr/en/cafes-and-pastry-shops/">Caffe</a>
                  <h4>Museum</h4>
                  <a href="http://www.tourism-varazdin.hr/en/museums-and-collections/">Museums and collections</a>
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
                  <h4>Organizators</h4>
                  <p>Udruga MOP</p>
                  <p>Turistička zajednica grada Varaždina</p>
                  <h4>Head organizational team</h4>
                  <p>Fran Mubrin, kreaticni i art direktor</p>
                  <p>Mihael Miklošić, koordinator projekta</p>
                  <p>Oliver Potočnik, koordinator projekta</p>
                  <h4>Festival program associates</h4>
                  <p>Marijo Janković</p>
                  <p>Dino Trojak</p>
                  <h4>Visual identety</h4>
                  <p>Marko Hrastovec</p>
                  <p>Fran Mubrin(web)</p>
                </div>
                <div className="half">
                  <h4>Web development</h4>
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
