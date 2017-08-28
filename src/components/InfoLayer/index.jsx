import * as React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InfoPoint from './InfoPoint';
import DisplayInfo from './DisplayInfo';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class InfoLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipVisible: false,
      xPos: 0,
      yPos: 0,
      infoId: undefined,
    };
    this.handleMouseEnterPoint = this.handleMouseEnterPoint.bind(this);
    this.handleMouseLeavePoint = this.handleMouseLeavePoint.bind(this);
  }
  handleMouseEnterPoint(e, id) {
    this.setState({
      isTooltipVisible: true,
      infoId: id,
      xPos: e.clientX,
      yPos: e.clientY,
    });
  }
  handleMouseLeavePoint(e) {
    this.setState({ isTooltipVisible: false, infoId: undefined });
  }
  render() {
    const { style, width, height, objects, coefficient } = this.props;
    const { xPos, yPos } = this.state;
    return (
      <div>
        <svg
          style={style}
          width={width}
          height={height}
        >
          {objects.map((object) => (
            <Link key={object.id} to={`/building/${object.id}`}>
              <InfoPoint
                top={`${(object.top / height) * 100}%`}
                left={`${(object.left / width) * 100}%`}
                id={object.id}
                label={object.label}
                coefficient={coefficient}
                handleMouseEnter={this.handleMouseEnterPoint}
                handleMouseLeave={this.handleMouseLeavePoint}
              />
            </Link>
          ))}
        </svg>
        {
          this.state.isTooltipVisible
            ? <DisplayInfo
              left={xPos}
              top={yPos}
              width={width}
              height={height}
              data={R.find(R.propEq('id', this.state.infoId), objects)}
            />
            : null
        }
      </div>
    );
  }
}

InfoLayer.propTypes = {
};
export default InfoLayer;
