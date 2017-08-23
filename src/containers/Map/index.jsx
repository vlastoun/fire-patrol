import React from 'react';
import PropTypes from 'prop-types';
import Map from './operativní karty 2016.png'

class MainMap extends React.Component {
  render() {
    return (
      <div>
        <img src={Map} alt='mapa'/>
      </div>
    );
  }
}

MainMap.propTypes = {
};
export default MainMap;
