import React from 'react';
import classnames from 'classnames';
class Session extends React.Component {
  handleClick() {
    this.props.activateDate(this.props.session.id, this.props.dayFull)
  }
  render() {
    const session = this.props.session;
    let type = '';
    var cls = classnames({
     'outer': true,
     'active': session.active
    });
    if (session.type) {
      type = <div className="type">{session.type}</div>
    }
    return (
      <div className={cls}>
        <div className="session group">
          <div className="time">
            <h4 onClick={this.handleClick.bind(this)}>{session.time}</h4>
          </div>
          <div className="speaker">
            {type}
            <h4 onClick={this.handleClick.bind(this)}>{session.author}</h4>
            <p>{session.author_desc}</p>
          </div>
          <div className="desc">
            <h4 onClick={this.handleClick.bind(this)}>{session.title}</h4>
            <p>{session.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

Session.defaultProps = {
};

export default Session;
