import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Map from './operativni-karty-mapa.png';
import Point from '../../components/Point/index';

const Img = styled.img`
  overflow-x: hidden;
  overflow-y: hidden;
  max-width: 100%;
  `;
const Container = styled.div`
  position: relative;
`;

const MainMap = ({ buildings, hideInfos }) => (
  <Container>
    <Img src={Map} alt="mapa" onClick={hideInfos}/>
    {buildings.map((object) => (
      <Point
        key={object.id}
        {...object}
      />
    ))}
  </Container>
);

MainMap.propTypes = {
  buildings: PropTypes.array.isRequired,
  hideInfos: PropTypes.func,
};

MainMap.defaultProps = {
  hideInfos: () => console.log('NO FNC MAN'),
};

export default MainMap;
