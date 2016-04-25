import React from 'react';
import classNames from 'classnames';
class Sponsors extends React.Component {
  renderItem(item, i) {
    const s = this.props.size;
    const size = classNames({
      'item': true,
      'four': s === 4,
      'three': s === 3
    });
    return (<div className={size} key={i}>
      DInek
    </div>);
  }
  render() {
    return (
      <div className="cont">
        <h3>{this.props.title}</h3>
        <div className="partners">
          {this.props.list.map(this.renderItem.bind(this))}
        </div>
      </div>
    );
  }
}

Sponsors.defaultProps = {
  list: React.PropTypes.array,
  size: React.PropTypes.number
};

export default Sponsors;
