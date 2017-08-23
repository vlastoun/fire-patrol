import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Links from '../../components/Links';
import Map from '../Map'
/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Map/>
      </div>
    );
  }
}

HomePage.propTypes = {
};
export default HomePage;
