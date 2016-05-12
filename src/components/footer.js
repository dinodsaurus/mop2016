import '../styles/footer.styl';
import React from 'react';
import { Link } from 'react-router'

class Footer extends React.Component {
  render() {
    let link = '';
    const path = document.location.pathname;
    if( path !== '/schedule') {
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
            <a href="https://twitter.com/franmubrin">Fran</a>, <a href="https://twitter.com/dinodsaurus">Dino</a> & <a href="https://twitter.com/markhrast">Marko</a></p>
          <p className="copy">© 2016</p>
          <ul className="social">
            <li className="icon facebook">
              <a href="https://www.facebook.com/MOPfest/"></a>
            </li>
            <li className="icon instagram">
              <a href="https://www.instagram.com/mopfest/"></a>
            </li>
            <li className="icon vimeo">
              <a href="https://vimeo.com/mopfest"></a>
            </li>
            <li className="icon twitter">
              <a href="https://twitter.com/mopfest"></a>
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
