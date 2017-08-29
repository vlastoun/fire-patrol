import * as React from 'react';
import { Image } from 'semantic-ui-react';
import Warning from './image001.png';
import ColourResolver from '../../ColourResolver';

const DisplayInfo = (props) => {
  const { img, name, group, height } = props.data;
  const {left, top} = props;
  return (
    <div
      style={{
        position: 'absolute',
        left: `${(left * props.scaleCoefficient)}px`,
        top: `${(top * props.scaleCoefficient)}px`,
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
};

export default DisplayInfo;
