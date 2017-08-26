import * as React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Point from '../../components/Point';
import { group, objects } from '../../data';

import MainMap from '../../components/Map-main';


const IMG_WIDTH = 2484;
const IMG_HEIGHT = 1496;

const Container = styled.div`
  position: relative;
`;

class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coefficient: 1,
    };
    this.calculateCoeficient = this.calculateCoeficient.bind(this);
  }
  componentDidMount() {
    this.calculateCoeficient();
    window.addEventListener('resize', this.calculateCoeficient);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateCoeficient);
  }

  calculateCoeficient() {
    const calculatedCoefficient = (window.innerWidth / IMG_WIDTH);
    this.setState({ coefficient: calculatedCoefficient });
  }

  render() {
    return (
      <Container>
        <Switch>
          <Route component={MainMap} />
        </Switch>
        {objects.map((object) => (
          <Point
            key={object.id}
            mapHeight={IMG_HEIGHT}
            mapWidth={IMG_WIDTH}
            coefficient={this.state.coefficient}
            {...object}
          />
        ))}
      </Container>
    );
  }
}

MapPage.propTypes = {
};
export default MapPage;
