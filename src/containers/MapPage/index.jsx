import * as React from 'react';
import * as R from 'ramda';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import Point from '../../components/Point';
import MainMap from '../../components/Map-main';
import { selectObjects } from './selectors';
import Tooltip from '../../components/Tooltip';
import MapLayer from '../../components/MapLayer';
import InfoLayer from '../../components/InfoLayer';

// Size of map layer - info layer must match
const IMG_WIDTH = 2610;
const IMG_HEIGHT = 1711;

// Styling for map layer and info layer components
const commonStyle = {
  width: '100%',
  height: 'auto',
  position: 'absolute',
  top: 0,
  left: 0,
};

const Container = styled.div`
  position: relative;
`;
/* eslint-disable class-methods-use-this */
class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coefficient: 1,
      mousePosX: 0,
      mousePosY: 0,
      activeID: null,
      isTooltipActive: false,
    };
    this.calculateCoeficient = this.calculateCoeficient.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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

  handleMouseEnter(event, id) {
    const xPos = event.clientX;
    const yPos = event.clientY;
    this.setState({
      mousePosX: xPos,
      mousePosY: yPos,
      activeID: id,
      isTooltipActive: true,
    });
  }

  handleMouseLeave() {
    this.setState({ isTooltipActive: false, activeID: null });
  }

  render() {
    const { objects } = this.props;
    return (
      <Container>
        <MapLayer
          style={commonStyle}
        />
        <InfoLayer
          style={commonStyle}
          objects={this.props.objects}
          width={IMG_WIDTH}
          height={IMG_HEIGHT}
          coefficient={this.state.coefficient}
        />
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
