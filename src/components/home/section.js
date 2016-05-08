import React from 'react';

class Section extends React.Component {
  render() {
    let style = {
      top: 0
    }
    let styleImg = {
      marginTop: 0
    }
    let styleImg2 = {
      marginTop: 0
    }
    if(this.props.start <= this.props.scroll) {
      style = {
        top: (this.props.scroll - this.props.start) / (this.props.speed || 1.5)
      }
      styleImg = {
        marginTop: - (this.props.scroll - this.props.start) / 30
      }
      styleImg2 = {
        marginTop: - (this.props.scroll - this.props.start) / 30
      }

    }
    return (
      <div className="section" style={style}>
        <img src={this.props.title}/>
        <div className="video video1" style={styleImg}>
          <img src={this.props.img1}/>
        </div>
        <div className="video video2" style={styleImg2}>
          <img src={this.props.img2}/>
        </div>
      </div>
    );
  }
}

export default Section;
