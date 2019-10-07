
import React from 'react';
import './Grid.css';

function Grid({ map, activeFace }) {
  return (
    <svg className="Grid" viewBox="0 0 5 5">
      <polygon
        points="1.2,2 3,4 4,4"
        stroke="green"
        fill="transparent"
        stroke-width="0.1"
      />
    </svg>
  );
}

export default Grid;
