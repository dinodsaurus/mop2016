import React from 'react';

class Session extends React.Component {
  render() {
    return (
      <div className="session group">
        <div className="time">
          <h4>13.00 — 14.00</h4>
        </div>
        <div className="speaker">
          <h4>Dino Trojak</h4>
        </div>
        <div className="desc">
          <h4>Ovo je moja prezentacija</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    );
  }
}

Session.defaultProps = {
};

export default Session;
