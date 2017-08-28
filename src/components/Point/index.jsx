import * as React from 'react';
import PropTypes from 'prop-types';

const MAIN_SIZE = 43;
const SECONDARY_SIZE = MAIN_SIZE / 2;

class Point extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }
  handleMouseEnter(e) {
    this.props.handleMouseEnter(e, this.props.id);
  }
  render() {
    const {scale} = this.props;
    const scaledSize = MAIN_SIZE * scale;
    const scaledSmall = SECONDARY_SIZE * scale;
    return (
      <svg
        width={scaledSize}
        height={scaledSize}
        viewBox={`0 0 ${scaledSize} ${scaledSize}`}
        style={{
          position: 'absolute',
          left: `${this.props.left}%`,
          top: `${this.props.top}%`,
          zIndex: '50',
          borderStyle: 'solid',
          borderWidth: '0px',
          cursor: 'pointer',
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.props.handleMouseLeave}
      >
        <circle cx={scaledSmall} cy={scaledSmall} r={scaledSmall} stroke="black" strokeWidth={scale * 3} fill="white" />
        <text
          style={{
            fontDecoration: 'none',
            fontSize: `${scale * 25}px`,
            border: 'none',
          }}
          x="50%"
          y="50%"
          textAnchor="middle"
          stroke="yellow"
          strokeWidth="0"
          dy=".3em"
        >
          {this.props.id}
        </text>
      </svg>
    );
  }
}

Point.propTypes = {
  id: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  scale: PropTypes.number.isRequired,
};

Point.defaultProps = {
  handleMouseLeave: () => console.log('not defined function for mouse leave'),
  handleMouseEnter: () => console.log('not defined function for mouse enter'),
};

export default Point;
