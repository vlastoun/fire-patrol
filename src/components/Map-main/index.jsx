import * as React from 'react';
import PropTypes from 'prop-types';
import Map from './mapa_biocel_resize.svg';

const MainMap = (props) => {
  return (
    <div>
      <img src={Map} alt="hlavni mapa budov" style={props.style}/>
    </div>
  );
};

MainMap.propTypes = {
  style: PropTypes.object.isRequired,
};

export default MainMap;
