import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Stats from './stats/stats';
import StatsCorridor from './stats/statsCorridor';
import CheckForm from './forms/check_form';
import Dashboard from './dashboard/dashboard';
import './App.css';

const App = () => {
    return (
      <BrowserRouter>
        <Route path="/dashbard" exact component={Dashboard} />
        <Route path="/" exact component={Stats} />
        <Route path="/korytarz" exact component={StatsCorridor} />
        <Route path="/forms" exact component={CheckForm} />
    </BrowserRouter>
    );
}

export default App;