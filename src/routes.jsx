import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

import App from './containers/App';
import HomePage from './containers/HomePage';

const routes = (
  <div>
    <App />
    <Route exact path="/" component={HomePage} />
  </div>
);

export default routes;
