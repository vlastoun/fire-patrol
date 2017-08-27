import * as React from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => (
  props.isVisible
    ? <div
      style={{
        position: 'absolute',
        width: '150px',
        height: '150px',
        borderStyle: 'solid',
        borderWidth: '2px',
        left: props.left,
        top: props.top,
      }}
    >
      {props.data ? props.data.name : null}
    </div>
    : null
);

Tooltip.propTypes = {
  isVisible: PropTypes.bool,
  data: PropTypes.object,
};

Tooltip.defaultProps = {
  isVisible: false,
  data: undefined,
};

export default Tooltip;
