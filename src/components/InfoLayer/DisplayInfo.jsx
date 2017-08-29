import * as React from 'react';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Warning from './image001.png';
import ColourResolver from '../../ColourResolver';

const TOOLTIP_ID = 'TooltipID';

// TODO: disable double rendering
const DisplayInfo = (props) => {
  {
    const { img, name, group, height } = props.data;
    const { left, top, imageWidth, imageHeight, scaleCoefficient } = props;
    let xPos;
    let yPos;
    if (left > (imageWidth / 2)) {
      xPos = ((left - 45) * scaleCoefficient) - 300;
    } else {
      xPos = (left + 45) * scaleCoefficient;
    }
    if (top > (imageHeight / 2)) {
      yPos = ((top - 45) * scaleCoefficient) - 200;
    } else {
      yPos = ((top + 45) * scaleCoefficient) - 200;
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
        <h3>{name || 'noname'}</h3>
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
};
DisplayInfo.propTypes = {
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  scaleCoefficient: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired,
  imageWidth: PropTypes.number.isRequired,
};

export default DisplayInfo;
