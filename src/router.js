import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/Main';

const router = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  )
}

export default router;
