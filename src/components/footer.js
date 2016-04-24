import '../styles/footer.styl';
import React from 'react';
import { Link } from 'react-router'

class Footer extends React.Component {
  render() {
    let link = '';
    if( this.props.link ) {
      link = (
        <div className="container group">
          <div className="program">
            <Link to="/schedule">See the full program now!</Link>
            <div className="hand"></div>
            <div className="hand2"></div>
          </div>
        </div>
      )
    }
    return (
      <div className="footer">
        {link}
        <div className="container group">
          <p className="txt">Made width <span className="heart">♥</span><br/>
            Fran, Dino & Marko</p>
          <p className="copy">© 2016</p>
          <ul className="social">
            <li className="icon facebook">
              <a></a>
            </li>
            <li className="icon instagram">
              <a></a>
            </li>
            <li className="icon vimeo">
              <a></a>
            </li>
            <li className="icon twitter">
              <a></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Footer.defaultProps = {
  link: React.PropTypes.bool
};

export default Footer;
