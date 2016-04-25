import React from 'react';
import img from '../../images/test.jpg';

class Speakers extends React.Component {
  renderItem(item, i) {
    return (<div className="item" key={i}>
      <div className="img">
        <img src={img}/>
        <div className="bck"></div>
      </div>
      <h2>Dino Trojak</h2>
      <p>Majstor svoje struke</p>
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
