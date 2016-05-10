import React from 'react';
import classnames from 'classnames';

class Loading extends React.Component {
  render() {
    const loadCls = classnames({
      'loading': true,
      'active': this.props.active
    });
    return (
      <div className={loadCls}>
        <div className="loader"></div>
      </div>
    );
  }
}

export default Loading;
