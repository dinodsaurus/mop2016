import React from 'react';
import Header from './header'
import Footer from './footer'
import Paralax from './paralax/paralax'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="home">
        <Header/>
        <Paralax/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
