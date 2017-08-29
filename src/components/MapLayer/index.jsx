import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainMap from '../Map-main';

const MapLayer = (props) => (
  <Switch>
    <Route exact path="/" render={() => <MainMap {...props}/>}/>
    {/* TODO: add routes to another maps */}
  </Switch>
);

export default MapLayer;
