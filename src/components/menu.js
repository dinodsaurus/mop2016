import '../styles/menu.styl';
import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
class Header extends React.Component {
  translate() {
    this.props.moveUp()
  }
  render() {
    var menuCls = classNames({
       'menu-screen': true,
       'active': this.props.active,
       'exiting': this.props.exiting,
       'noAnimation': this.props.noAnimation
     });
    return (
      <div className={menuCls}>
        <ul>
          <li><Link onClick={this.translate.bind(this)} to="/">Home</Link></li>
          <li><Link onClick={this.translate.bind(this)} to="/schedule">Schedule</Link></li>
          <li><Link onClick={this.translate.bind(this)} to="/speakers">Speakers</Link></li>
          <li><Link onClick={this.translate.bind(this)} to="/spancirfest">Špancirfest</Link></li>
          <li><Link onClick={this.translate.bind(this)} to="/sponsors">Sponsors</Link></li>
          <li><Link onClick={this.translate.bind(this)} to="/about">About us</Link></li>
        </ul>
      </div>
    );
  }
}

Header.defaultProps = {
  moveUp: React.PropTypes.func
};

export default Header;
