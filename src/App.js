// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeneralMetricsPage from './components/GeneralMetricsPage';
import TimeToSignOffPage from './components/TimeToSignOffPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact component={GeneralMetricsPage} />
          <Route path='/time-to-sign-off' component={TimeToSignOffPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
