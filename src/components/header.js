import '../styles/header.styl';
import React from 'react';
import Menu from './menu'
class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.showMenu = false;
  }
  showMenu(e) {
    e.preventDefault();
    this.setState({showMenu: !this.state.showMenu})
  }
  render() {
    var text = 'Menu';
    if (this.state.showMenu) {
      text = "Close";
    }
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
          <a onClick={this.showMenu.bind(this)}>{text}</a>
          <Menu active={this.state.showMenu}/>
        </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
};

export default Header;
