import '../styles/about.styl'
import React from 'react';
import Title from './title'
import headerImg from '../images/header_img_about.jpg';

class Schedule extends React.Component {
  render() {
    return (
      <div className="about">
        <Title title="About" bck={headerImg}/>
        <div className="container group">
          <section>
            <div className="titleTxt">
              Glavni organizator festivala je Udruge MOP dok je organizator festivala multimedije je Turistička zajednica grada Varaždina (TZGV).
            </div>
            <div className="cell">
              Program Festivala najviše je povezan s multimedijom i digitalnom kulturom, pri čemu se nastoji aktivirati što veći broj studenata, predavača, multimedijalnih umjetnika, glazbenika i ostalih kreativaca kako bi se međusobno razmijenila znanja i povećali potencijali. Program Festivala najviše je povezan s multimedijom i digitalnom kulturom, pri čemu se nastoji aktivirati što veći broj studenata, predavača, multimedijalnih umjetnika, glazbenika i ostalih kreativaca kako bi se međusobno razmijenila znanja i povećali potencijali.             </div>
          </section>
        </div>
      </div>
    );
  }
}

Schedule.defaultProps = {
};

export default Schedule;
