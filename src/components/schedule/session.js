import React from 'react';

class Session extends React.Component {
  render() {
    const session = this.props.session;
    console.log(session);
    return (
      <div className="session group">
        <div className="time">
          <h4>{session.time}</h4>
        </div>
        <div className="speaker">
          <h4>{session.author}</h4>
        </div>
        <div className="desc">
          <h4>{session.title}</h4>
          <p>{session.description}</p>
        </div>
      </div>
    );
  }
}

Session.defaultProps = {
};

export default Session;
