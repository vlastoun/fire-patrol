import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './point';
import styled from 'styled-components';
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
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.calculateCoeficient = this.calculateCoeficient.bind(this);
  }
  componentWillMount() {
    this.updateDimensions();
    this.calculateCoeficient();
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener('resize', this.calculateCoeficient);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    window.removeEventListener('resize', this.calculateCoeficient);
  }
  updateDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }
  calculateCoeficient() {
    const width = window.innerWidth;
    const imageWidth = IMG_WIDTH;
    const calculatedCoefficient = (width / imageWidth);
    this.setState({coefficient: calculatedCoefficient});
  }
  render() {
    const { top, left} = this.props;
    const calcTop = (top / IMG_HEIGHT) * 100;
    const calcLeft = (left / IMG_WIDTH) * 100;
    console.log(calcTop, calcLeft);
    return (
      <Wrapper top={`${calcTop}%`} left={`${calcLeft}%`} coefficient={this.state.coefficient}>
        <Text />
      </Wrapper>
    );
  }
}

Point.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.node.isRequired,
  number: PropTypes.string.isRequired,
};
export default Point;

