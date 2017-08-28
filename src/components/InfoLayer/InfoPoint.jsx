import * as React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class InfoPoint extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }
  handleMouseEnter(e) {
    this.props.handleMouseEnter(e, this.props.id);
  }
  render() {
    const { top, left, label, coefficient } = this.props;
    return (
      <g
        onMouseEnter={this.handleMouseEnter}
      >
        <circle
          cx={left}
          cy={top}
          r={`${25 * coefficient}px`}
          fill="white"
          stroke="black"
        />
        <text
          x={left}
          y={top}
          fontSize={`${25 * coefficient}px`}
          textAnchor='middle'
          dy={`${8.5 * coefficient}px`}
        >
          {label}
        </text>
      </g>
    );
  }
}

InfoPoint.propTypes = {
};
export default InfoPoint;
