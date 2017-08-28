import * as React from 'react';

const DisplayInfo = (props) => {
  const {left, top } = props;
  let originY;
  let originX;
  if (top > (window.innerHeight / 2)){
    originY = top - 600;
  } else {
    originY = top + 100;
  }

  if ( left > (window.innerWidth / 2)){
    originX = left - 350;
  } else {
    originX = left + 100;
  }

  return (
    <div
      style={{
        position: 'fixed',
        left:originX,
        top: originY,
        borderStyle: 'solid',
        borderWidth: '2px',
        padding: '10px',
        width: '250px',
        height: '500px',
      }}
    >
      <h4>
        {
          props.data.name
            ? props.data.name
            : 'noname'
        }
      </h4>
    </div>
  );
};

export default DisplayInfo;
