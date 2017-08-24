import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Map from '../Map';
import Point from '../../components/Point';
import {group, objects} from '../../data';

const Header = styled.h2`
  background-color: #00ff00;
`;
/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Map buildings={objects}/>
      </div>
    );
  }
}

HomePage.propTypes = {
};
export default HomePage;
