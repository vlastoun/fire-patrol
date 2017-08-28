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
import MAP from '../../components/Map-main/mapa_biocel_resize.svg';

const IMG_WIDTH = 2610;
const IMG_HEIGHT = 1711;

const commonStyle = {
  width: '100%',
  height: 'auto',
  position: 'absolute',
  top: 0,
  left: 0,
}

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
        <img src={MAP} alt="mapa" style={commonStyle}/>
        <svg
          width="2610"
          height="1711"
          style={commonStyle}
        >
        {objects.map((object)=><circle cx={`${object.left/2610*100}%`} cy={`${object.top/1711*100}%`} r={`${24*this.state.coefficient}px`} stroke="black" fill="none" />)}
        </svg>
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

// {objects.map((object) => (
//   <Point
//     id={object.id}
//     key={object.id}
//     top={(object.top / IMG_HEIGHT) * 100}
//     left={(object.left / IMG_WIDTH) * 100}
//     scale={this.state.coefficient}
//     data="test"
//     handleMouseEnter={this.handleMouseEnter}
//     handleMouseLeave={this.handleMouseLeave}
//   />
// ))}