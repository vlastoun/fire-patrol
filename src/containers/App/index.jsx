import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import MapPage from '../MapPage';
import HydrantsMap from '../../components/Map-hydrants';
import LaddersMap from '../../components/Map-ladders';
import BuildingPage from '../BuildingPage';
import Links from '../../components/Links';
import BuildingsList from '../../components/BuildingsList';

const App = () => (
  <div>
    <Links />
    <Switch>
      <Route exact path="/" component={MapPage} />
      <Route exact path="/hydrants" component={HydrantsMap}/>
      <Route exact path="/ladders" component={LaddersMap}/>
      <Route exact path="/building/:id" component={BuildingPage} />
      <Route exact path="/buildingslist" component={BuildingsList}/>
      <Route component={MapPage} />
    </Switch>
  </div>
);

App.propTypes = {
};
export default App;
