import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import MapPage from '../MapPage';
import HydrantsMap from '../../components/Map-hydrants';
import LaddersMap from '../../components/Map-ladders';
import BuildingPage from '../BuildingPage';
import Links from '../../components/Links';
import SvgComponent from '../../components/SvgComponent';

const App = () => (
  <div>
    <Links />
    <Switch>
      <Route exact path="/" component={MapPage} />
      <Route exact path="/building/:id" component={BuildingPage} />
      <Route exact path="/svg" component={SvgComponent} />
      <Route component={MapPage} />
    </Switch>
  </div>
);

App.propTypes = {
};
export default App;
