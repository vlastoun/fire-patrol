import * as React from 'react';
import * as R from 'ramda';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import InfoPoint from './InfoPoint';
import DisplayInfo from './DisplayInfo';
import { selectHoveringOn, selectIsHoveringActive, selectObjects} from './selectors';

const SVG_CONTAINER_NAME = 'svgContainerInfoLayer';

class InfoLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipVisible: false,
      xPos: 0,
      yPos: 0,
      infoId: undefined,
      divHeight: undefined,
      divWidth: undefined,
    };
    this.handleMouseEnterPoint = this.handleMouseEnterPoint.bind(this);
    this.handleMouseLeavePoint = this.handleMouseLeavePoint.bind(this);
    this.handleHoveredLink = this.handleHoveredLink.bind(this);
    this.getSvgSize = this.getSvgSize.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.getSvgSize);
    this.getSvgSize();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.getSvgSize);
  }
  getSvgSize() {
    this.setState({
      divHeight: document.getElementById(SVG_CONTAINER_NAME).clientHeight,
      divWidth: document.getElementById(SVG_CONTAINER_NAME).clientWidth,
    });
  }
  handleHoveredLink(id) {
    const object = R.find(R.propEq('id', id), this.props.objects);
    const scaleCoefficient = this.state.divWidth / this.props.width;
    return (
      <DisplayInfo
        left={object.left}
        top={object.top}
        imageWidth={this.props.width}
        imageHeight={this.props.height}
        data={object}
        scaleCoefficient={scaleCoefficient}
      />
    );
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
    return (
      <div className="wrapperInfo">
        <svg
          style={style}
          width={width}
          height={height}
          id={SVG_CONTAINER_NAME}
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
                group={object.group}
                isHovered={object.id === this.props.hoveringOn}
              />
            </Link>
          ))}
        </svg>
        <div className="tooltipLayer" style={{height: this.state.divHeight}}>
          {this.state.isTooltipVisible
            ? this.handleHoveredLink(this.state.infoId)
            : null
          }
          {this.props.isHoveringActive
            ? this.handleHoveredLink(this.props.hoveringOn)
            : null
          }
        </div>
      </div>
    );
  }
}

InfoLayer.propTypes = {
  style: PropTypes.object.isRequired,
  coefficient: PropTypes.number.isRequired,
  hoveringOn: PropTypes.number,
  isHoveringActive: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  objects: PropTypes.array.isRequired,
};

InfoLayer.defaultProps = {
  hoveringOn: undefined,
};
const mapStateToProps = () => createStructuredSelector({
  objects: selectObjects(),
  hoveringOn: selectHoveringOn(),
  isHoveringActive: selectIsHoveringActive(),
});

InfoLayer.propTypes = {
  objects: PropTypes.array.isRequired,
  hoveringOn: PropTypes.number,
  isHoveringActive: PropTypes.bool.isRequired,
};

InfoLayer.defaultProps = {
  hoveringOn: undefined,
};

export default connect(mapStateToProps, null)(InfoLayer);
