import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Wrapper from './point';
import Tooltip from '../Tooltip';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
const Text = styled.p`
 font-weight: bold;
 text-align: center;
 position: relative;
 top: 2px;
`;

const IMG_WIDTH = 1962;
const IMG_HEIGHT = 1311;

class Point extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 1,
      width: 1,
      coefficient: 1,
      isInfoVisible: false,
      isTooltipVisible: false,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.calculateCoeficient = this.calculateCoeficient.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  componentWillMount() {
    this.updateDimensions();
    this.calculateCoeficient();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener('resize', this.calculateCoeficient);
    window.addEventListener('keypress', this.hideInfo);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    window.removeEventListener('resize', this.calculateCoeficient);
    window.removeEventListener('keypress', this.hideInfo);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  calculateCoeficient() {
    const width = window.innerWidth;
    const imageWidth = IMG_WIDTH;
    const calculatedCoefficient = (width / imageWidth);
    this.setState({ coefficient: calculatedCoefficient });
  }

  showInfo() {
    this.setState({ isInfoVisible: true });
  }

  hideInfo(e) {
    if (e.code === 'KeyQ') {
      this.setState({ isInfoVisible: false });
    }
  }

  showTooltip() {
    this.setState({ isTooltipVisible: true });
  }

  hideTooltip() {
    this.setState({ isTooltipVisible: false });
  }

  render() {
    const { top, left, group, id, name } = this.props;
    const calcTop = (top / IMG_HEIGHT) * 100;
    const calcLeft = (left / IMG_WIDTH) * 100;
    return (
      <Wrapper
        top={`${calcTop}%`}
        left={`${calcLeft}%`}
        coefficient={this.state.coefficient}
        onClick={this.showInfo}
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
      >
        <Text />
        {this.state.isInfoVisible ? <Tooltip>{name}</Tooltip> : null}
      </Wrapper>
    );
  }
}

Point.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.node.isRequired,
};
export default Point;

