import * as React from 'react';
import PropTypes from 'prop-types';

class Point extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }
  handleMouseEnter(e) {
    this.props.handleMouseEnter(e, this.props.id);
  }
  render() {
    return (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        style={{
          position: 'absolute',
          left: `${this.props.left}%`,
          top: `${this.props.top}%`,
          zIndex: '50',
          borderStyle: 'solid',
          borderWidth: '2px',
          cursor: 'pointer',
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.props.handleMouseLeave}
      >
        <circle cx="50" cy="50" r="50" stroke="black" strokeWidth="3" fill="red" />
        <text
          style={{
            fontDecoration: 'none',
            fontSize: '3em',
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
  data: PropTypes.string.isRequired,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
};

Point.defaultProps = {
  handleMouseLeave: () => console.log('not defined function for mouse leave'),
  handleMouseEnter: () => console.log('not defined function for mouse enter'),
};

export default Point;
