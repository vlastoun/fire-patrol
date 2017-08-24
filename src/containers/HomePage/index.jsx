import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Map from '../Map';
import Point from '../../components/Point'

const Header = styled.h2`
  background-color: #00ff00;
`;
/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header>Test</Header>
        <Map>
          <Point left={650} top={258} number="48" />
        </Map>
        <Header>Test</Header>
      </div>
    );
  }
}

HomePage.propTypes = {
};
export default HomePage;
