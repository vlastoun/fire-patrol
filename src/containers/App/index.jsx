import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage';
import MainMenu from './MainMenu';

const App = () => (
  <div>
    <MainMenu />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:map/:id" component={HomePage} />
      <Route component={HomePage} />
    </Switch>
  </div>
);

export default App;
