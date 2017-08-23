import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Map from './operativni-karty-mapa.png';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
const Img = styled.img`
  overflow-x: hidden;
  overflow-y: hidden;
  max-width: 100%;
`;

class MainMap extends React.Component {
  render() {
    return (
      <div>
        <Img src={Map} alt="mapa" />
      </div>
    );
  }
}

MainMap.propTypes = {
};
export default MainMap;
