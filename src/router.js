import 'normalize.css';
import 'styles/App.styl';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home';
import Schedule from './components/schedule';
import Speakers from './components/speakers';
import Spancirfest from './components/spancirfest';
import Sponsors from './components/sponsors';
import About from './components/about';

const router = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="schedule" component={Schedule}/>
        <Route path="speakers" component={Speakers}/>
        <Route path="spancirfest" component={Spancirfest}/>
        <Route path="sponsors" component={Sponsors}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  )
}

export default router;
