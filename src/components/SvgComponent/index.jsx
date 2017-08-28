import * as React from 'react';
import PropTypes from 'prop-types';

const style = {
  text: {
    fontDecoration: 'none',
    fontSize: '3em',
    border: 'none',
    color: 'yellow',
  }
}


/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class SvgComponent extends React.Component {
  render() {
    return (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
        <text style={style.text} x="50%" y="50%" textAnchor="middle" stroke="yellow" strokeWidth="2px" dy=".3em">3</text>
      </svg>
    );
  }
}

SvgComponent.propTypes = {
};
export default SvgComponent;
