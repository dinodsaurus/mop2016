import '../styles/footer.styl';
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
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
};

export default Footer;
