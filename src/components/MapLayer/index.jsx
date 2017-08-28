import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainMap from '../Map-main';
import Hydrants from '../Map-hydrants';

const MapLayer = (props) => (
  <Switch>
    <Route exact path="/" render={() => <MainMap {...props}/>}/>
    <Route exact path="/hydrants" render={() => <Hydrants {...props}/>}/>
  </Switch>
);

export default MapLayer;
