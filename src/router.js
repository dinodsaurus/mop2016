import 'normalize.css';
import 'styles/App.styl';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/home';

const router = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/" component={Home}/>
    </Router>
  )
}

export default router;
