import * as React from 'react';
import { Image } from 'semantic-ui-react';
import Warning from './image001.png';
import ColourResolver from '../../ColourResolver';

const TOOLTIP_ID = 'TooltipID'
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class DisplayInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tooltipHeight: 500 };
    this.calculateDivHeight = this.calculateDivHeight.bind(this);
  }
  componentDidMount() {
    this.calculateDivHeight();
  }
  calculateDivHeight() {
    this.setState({
      tooltipHeight: document.getElementById(TOOLTIP_ID).clientHeight,
    });
  }
  // TODO: solve problem with double rendering
  render(){
    const { img, name, group, height } = this.props.data;
    const { left, top, imageWidth, imageHeight, scaleCoefficient } = this.props;
    let xPos;
    let yPos;
    if (left > (imageWidth / 2)) {
      xPos = ((left - 45) * scaleCoefficient) - 300;
    } else {
      xPos = (left + 45) * scaleCoefficient;
    }
    if (top > (imageHeight / 2)) {
      yPos = ((top - 45) * scaleCoefficient) - this.state.tooltipHeight;
    } else {
      yPos = (top + 45) * scaleCoefficient;
    }
    return (
      <div
        id={TOOLTIP_ID}
        style={{
          position: 'absolute',
          left: `${(xPos)}px`,
          top: `${(yPos)}px`,
          borderStyle: 'solid',
          borderWidth: '2px',
          padding: '10px',
          width: '300px',
          backgroundColor: 'white',
          borderRadius: '10px',
          borderColor: ColourResolver(group),
          boxShadow: '5px',
          zIndex: 100,
        }}
      >
        <h3>
          {
            name || 'noname'
          }
        </h3>
        <p>{height}</p>
        <Image style={{ height: '50px' }} src={Warning} alt="warning" />
        <div>
          {img.length > 0
            ? img.map((image) => <Image key={image} src={image} alt={name} />)
            : null
          }
        </div>
      </div>
    );
  }
}

export default DisplayInfo;
