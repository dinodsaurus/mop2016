import React from 'react';
import img from '../../images/test.jpg';

class Speakers extends React.Component {
  renderItem(item, i) {
    return (<div className="item" key={i}>
      <div className="img">
        <img src={`speak/${item.img}`}/>
        <div className="bck"></div>
      </div>
      <h2>{item.author}</h2>
      <p>{item.position}</p>
    </div>);
  }
  render() {
    return (
      <div className="speakersList">
        {this.props.list.map(this.renderItem.bind(this))}
      </div>
    );
  }
}

Speakers.defaultProps = {
  list: React.PropTypes.array
};

export default Speakers;
