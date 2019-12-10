
import React from 'react';

import './GridSize.css';

function GridSize({ setGridDimensionsInTriangles }) {
  return (
    <button
      type="button"
      className="grid-size"
      onClick={() => setGridDimensionsInTriangles({
        width: 5,
        height: 7
      })}
    >
      <svg
        viewBox="0 0 0.8660 1.5"
      >
        <polygon
          points="0,0 0.8660,0.5 0.8660,1.5 0,1"
        >
        </polygon>
      </svg>
    </button>
  );
}

export default GridSize;
