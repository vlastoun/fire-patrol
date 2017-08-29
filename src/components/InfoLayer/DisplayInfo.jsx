import * as React from 'react';
import { Image } from 'semantic-ui-react';
import Warning from './image001.png';
import ColourResolver from '../../ColourResolver';

const DisplayInfo = (props) => {
  const { left, top } = props;
  let originY;
  let originX;
  if (top > (50)) {
    originY = top - 250;
  } else {
    originY = top + 0;
  }

  if (left > (50)) {
    originX = left - 338;
  } else {
    originX = left + 38;
  }
  const { img, name, group, height } = props.data;
  return (
    <div
      style={{
        position: 'fixed',
        left: originX,
        top: originY,
        borderStyle: 'solid',
        borderWidth: '2px',
        padding: '10px',
        width: '300px',
        backgroundColor: 'white',
        borderRadius: '10px',
        borderColor: ColourResolver(group),
        boxShadow: '5px',
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
};

export default DisplayInfo;
