import * as React from 'react';
import { Image } from 'semantic-ui-react';
import Warning from './image001.png';

const DisplayInfo = (props) => {
  const { left, top } = props;
  let originY;
  let originX;
  if (top > (window.innerHeight / 2)) {
    originY = top - 250;
  } else {
    originY = top + 0;
  }

  if (left > (window.innerWidth / 2)) {
    originX = left - 338;
  } else {
    originX = left + 38;
  }
  const { img, name } = props.data;
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
        boxShadow: '5px',
      }}
    >
      <h3>
        {
          name || 'noname'
        }
      </h3>
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
