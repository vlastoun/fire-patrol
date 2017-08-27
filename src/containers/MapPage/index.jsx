import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {createStructuredSelector} from 'reselect';
import Point from '../../components/Point';
import MainMap from '../../components/Map-main';
import {selectObjects} from './selectors.js';


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
        {this.props.objects.map((object) => (
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
const mapStateToProps = () => createStructuredSelector({
  objects: selectObjects(),
});


MapPage.propTypes = {
  objects: PropTypes.array.isRequired,
};
export default connect(mapStateToProps, null)(MapPage);
