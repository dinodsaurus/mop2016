import React from 'react';
import {Link} from 'react-router';

class Speakers extends React.Component {
  renderItem(item, i) {
    return (<Link to={{ pathname: '/schedule', query: { day: item.day, id: item.id}}}  className="item" key={i}>
      <div className="img">
        <img src={`speak/${item.img}`}/>
        <div className="bck"></div>
      </div>
      <h2>{item.author}</h2>
      <p>{item.position}</p>
    </Link>);
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
