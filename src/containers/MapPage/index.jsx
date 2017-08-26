import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Point from '../../components/Point';
import {group, objects} from '../../data';

import MainMap from '../../components/Map-main';
import HydrantsMap from '../../components/Map-hydrants';
import LaddersMap from '../../components/Map-ladders';

const Container = styled.div`
  position: relative;
`;

/* eslint-disable react/prefer-stateless-function */
class MapPage extends React.Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/ladders" component={LaddersMap} />
          <Route exact path="/hydrants" component={HydrantsMap} />
          <Route component={MainMap} />
        </Switch>
      </Container>
    );
  }
}

MapPage.propTypes = {
};
export default MapPage;
