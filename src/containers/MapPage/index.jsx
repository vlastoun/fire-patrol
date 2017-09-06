import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MapLayer from '../../components/MapLayer';
import InfoLayer from '../../components/InfoLayer';
import SideNavigation from '../../components/SideNavigation';
import Vetrovka from './vetrovka.svg';

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
  margin-top: 55px;
  flex: 1;
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
    return (
      <SideNavigation>
        <Container>
          <MapLayer
            style={commonStyle}
          />
          <InfoLayer
            style={commonStyle}
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            coefficient={this.state.coefficient}
          />
          <img width="20%" style={{position: 'absolute', left: '10px', top: '20px', zIndex: -5}} src={Vetrovka} alt="vetrovka"/>
        </Container>
      </SideNavigation>
    );
  }
}
export default MapPage;
