import '../styles/menu.styl';
import React from 'react';
import classNames from 'classNames';
class Header extends React.Component {
  render() {
    var menuCls = classNames({
       'menu-screen': true,
       'active': this.props.active
     });
    return (
      <div className={menuCls}>
        <ul>
          <li>Home</li>
          <li>Schedule</li>
          <li>Speakers</li>
          <li>Špancirfest</li>
          <li>Sponsors</li>
          <li>About us</li>
        </ul>
      </div>
    );
  }
}

Header.defaultProps = {
};

export default Header;
