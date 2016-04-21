import React from 'react';
import Header from './header'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="home">
        <Header/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
