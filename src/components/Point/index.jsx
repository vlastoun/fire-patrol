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

class Point extends React.Component {
  render() {
    const { top, left} = this.props;
    return (
      <Wrapper top={top} left={left}>
        <Text>{this.props.number}</Text>
      </Wrapper>
    );
  }
}

Point.propTypes = {
};
export default Point;

