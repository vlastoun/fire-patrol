import * as React from 'react';
import styled from 'styled-components';
import Map from './mapa_biocel_resize.svg';

const Img = styled.img`
  width: 100%;
`;

const MainMap = () => (
  <div>
    <Img src={Map} alt="hlavni mapa budov"/>
  </div>
);

export default MainMap;
