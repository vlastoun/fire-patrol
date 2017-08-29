import * as React from 'react';
import PropTypes from 'prop-types';
import ColourResolver from '../../ColourResolver.js';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class InfoPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isActive: false}
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseEnter(e) {
    this.props.handleMouseEnter(e, this.props.id);
    this.setState({isActive: true});
  }
  handleMouseLeave(){
    this.props.handleMouseLeave();
    this.setState({isActive: false});
  }
  render() {
    const { top, left, label, coefficient, group } = this.props;
    return (
      <g
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <circle
          cx={left}
          cy={top}
          r={`${25 * coefficient}px`}
          fill={this.state.isActive ? 'lightgrey' : 'white'}
          strokeWidth={`${4 * coefficient}px`}
          stroke={ColourResolver(group)}
        />
        <text
          x={left}
          y={top}
          fontSize={`${25 * coefficient}px`}
          textAnchor='middle'
          dy={`${8.5 * coefficient}px`}
          stroke
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
