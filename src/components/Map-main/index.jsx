import * as React from 'react';
import Map from './mapa_biocel_resize.svg';

const MainMap = (props) => {
  return (
    <div>
      <img src={Map} alt="hlavni mapa budov" style={props.style}/>
    </div>
  );
};

export default MainMap;
