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
import ProjectsPage from './containers/ProjectsPage';
import SingleProject from './containers/SingleProject';
import ContactPage from './containers/ContactPage';

const routes = (
  <div>
    <App />
    <Container>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects/" component={ProjectsPage} />
      <Route path="/contact/" component={ContactPage} />
      <Route path="/projects/:id" component={SingleProject} />
    </Container>
  </div>
);

export default routes;
