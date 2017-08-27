import * as React from 'react';
import PropTypes from 'prop-types';

const Point = (props) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${props.left}%`,
        top: `${props.top}%`,
        zIndex: '50',
        borderStyle: 'solid',
        borderWidth: '2px',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
      }}
      onMouseEnter={props.handleMouseEnter}
    >
      {props.data}
    </div>
  );
};

Point.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
};

export default Point;
