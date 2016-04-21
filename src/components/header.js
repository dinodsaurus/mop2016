import '../styles/header.styl';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container group">
          <h1>MOP<br/>
          ŠPANCIRFEST<br/>
          Multimedia festival<br/>
          25.5. — 28.5.2016.<br/>
          Varaždin</h1>
        <div className="menu">
          <div className="double"></div>
          <a>Menu</a>
        </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
};

export default Header;
