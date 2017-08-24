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

class MainMap extends React.Component {
  constructor(prop) {
    super(prop);
    this.mapObjectsToPoints = this.mapObjectsToPoints.bind(this);
  }
  mapObjectsToPoints(){
    const { buildings } = this.props;
    return buildings.map((object) => <Point key={object.id} {...object}/>);
  }
  render() {
    return (
      <Container>
        <Img src={Map} alt="mapa" />
        {this.mapObjectsToPoints()}
        {React.Children.toArray(this.props.children)}
      </Container>
    );
  }
}

MainMap.propTypes = {
  buildings: PropTypes.array.isRequired,
  children: PropTypes.object,
};
MainMap.defaultProps = {
  children: null,
};
export default MainMap;
