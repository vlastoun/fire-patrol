import * as React from 'react';

const DisplayInfo = (props) => (
  <div
    style={{
      position: 'fixed',
      left: props.left,
      top: props.top,
      borderStyle: 'solid',
      borderWidth: '2px',
    }}
  >
    <h2>
      {
        props.data.name
          ? props.data.name
          : 'noname'
      }
    </h2>
  </div>
);

export default DisplayInfo;
