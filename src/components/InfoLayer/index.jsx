import * as React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import InfoPoint from './InfoPoint';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class InfoLayer extends React.Component {
  render() {
    const { style, width, height, objects, coefficient } = this.props;
    return (
      <svg
        style={this.props.style}
        width={this.props.width}
        height={this.props.height}
      >
        {this.props.objects.map((object) => (
          <Link to={`/building/${object.id}`}>
            <InfoPoint
              key={object.id}
              top={`${(object.top / height) * 100}%`}
              left={`${(object.left / width) * 100}%`}
              id={object.id}
              label={object.label}
              coefficient={coefficient}
            />
          </Link>
        ))}
      </svg>
    );
  }
}

InfoLayer.propTypes = {
};
export default InfoLayer;
