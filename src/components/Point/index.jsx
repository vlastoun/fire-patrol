import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Border from './border';
import InfoBox from './InfoBox';

class Point extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 1,
      width: 1,
      coefficient: 1,
      isTooltipVisible: false,
    };
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  showTooltip() {
    this.setState({ isTooltipVisible: true });
  }

  hideTooltip() {
    this.setState({ isTooltipVisible: false });
  }


  render() {
    const { top, left, group, name, mapHeight, mapWidth } = this.props;
    const calcTop = (top / mapHeight) * 100;
    const calcLeft = (left / mapWidth) * 100;
    return (
      <Link to={`/building/${this.props.id}`}>
        <Border
          top={`${calcTop}%`}
          left={`${calcLeft}%`}
          coefficient={this.props.coefficient}
          onClick={this.showInfo}
          onMouseEnter={this.showTooltip}
          onMouseLeave={this.hideTooltip}
          active={this.state.isTooltipVisible}
          group={group}
        >
          <div style={{ position: 'relative' }}>
            {this.state.isTooltipVisible ? <InfoBox><span>{name}</span></InfoBox> : null}
          </div>
        </Border>
      </Link>
    );
  }
}

Point.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.node.isRequired,
  coefficient: PropTypes.number.isRequired,
  group: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  mapWidth: PropTypes.number.isRequired,
  mapHeight: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
export default Point;

