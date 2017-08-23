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
const Container = styled.div`
  position: relative;
`;

class MainMap extends React.Component {
  render() {
    return (
      <Container>
        <Img src={Map} alt="mapa" />
        {React.Children.toArray(this.props.children)}
      </Container>
    );
  }
}

MainMap.propTypes = {
};
export default MainMap;
