import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MapPage from '../MapPage';
import MainMenu from './MainMenu';

const App = () => (
  <div>
    <MainMenu />
    <Switch>
      <Route exact path="/" component={MapPage} />
      <Route exact path="/:map/:id" component={MapPage} />
      <Route component={MapPage} />
    </Switch>
  </div>
);

export default App;
