// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GeneralMetricsPage from './components/GeneralMetricsPage';
import TimeToSignOffPage from './components/TimeToSignOffPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={GeneralMetricsPage} />
          <Route path='/time-to-sign-off' component={TimeToSignOffPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
