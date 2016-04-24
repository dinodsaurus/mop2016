import React from 'react';
import Header from './header'
import Footer from './footer'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="home">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
