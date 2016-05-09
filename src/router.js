import 'normalize.css';
import 'styles/App.styl';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home';
import Schedule from './components/schedule';
import Speakers from './components/speakers';
import Sponsors from './components/sponsors';
import About from './components/about';

const router = () => {
  return (
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="schedule" component={Schedule}/>
        <Route path="speakers" component={Speakers}/>
        <Route path="partners" component={Sponsors}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  )
}

export default router;
