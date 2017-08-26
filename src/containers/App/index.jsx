import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MapPage from '../MapPage';
import MainMenu from './MainMenu';
import HydrantsMap from '../../components/Map-hydrants';
import LaddersMap from '../../components/Map-ladders';

const App = () => (
  <div>
    <MainMenu />
    <Switch>
      <Route exact path="/" component={MapPage} />
      <Route exact path="/building/:id" component={MapPage} />
      {/* TODO: nest hydrants and ladders under 
      layer of Points component - must have maps with correct width
      Just move those subroutes under another router in MapPage */}
      <Route exact path="/ladders" component={LaddersMap} />
      <Route exact path="/hydrants" component={HydrantsMap} />
      <Route component={MapPage} />
    </Switch>
  </div>
);

export default App;

