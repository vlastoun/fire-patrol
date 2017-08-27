import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Border from './border';
import Infobox from './InfoBox';
import Number from './number';

const MAX_WIDTH = '250px';

const Heading = styled.p`
  font-weight: 500;
  font-size: 0.8em;
  width: ${MAX_WIDTH};
`;

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
    const { top, left, group, name, mapHeight, mapWidth, img, label } = this.props;
    const calcHeight = (top / mapHeight) * 100;
    const calcLeft = (left / mapWidth) * 100;
    const Content = (
      <Infobox>
        <Heading>{name}</Heading>
        <img src={img[0]} alt={name} style={{maxWidth: MAX_WIDTH}}/>
      </Infobox>
    );
    return (
      <Link to={`/building/${this.props.id}`}>
        <Border
          top={`${calcHeight}%`}
          left={`${calcLeft}%`}
          coefficient={this.props.coefficient}
          onClick={this.showInfo}
          onMouseEnter={this.showTooltip}
          onMouseLeave={this.hideTooltip}
          active={this.state.isTooltipVisible}
          group={group}
        >
          <div style={{ position: 'relative' }}>
            {this.state.isTooltipVisible ? Content : null}
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
  img: PropTypes.array.isRequired,
};
export default Point;

