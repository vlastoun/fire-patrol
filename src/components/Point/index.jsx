import * as React from 'react';
import PropTypes from 'prop-types';

class Point extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }
  handleMouseEnter(e){
    this.props.handleMouseEnter(e, this.props.id);
  }
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: `${this.props.left}%`,
          top: `${this.props.top}%`,
          zIndex: '50',
          borderStyle: 'solid',
          borderWidth: '2px',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.props.handleMouseLeave}
      >
        {this.props.data}
      </div>
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
