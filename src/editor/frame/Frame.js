
import React from 'react';
import TrianglesGrid from './TrianglesGrid';
import { trianglesMapBuilder } from './gridUtils';
import './Frame.css';


function Frame({ gridDimensionsInTriangles, activeFace }) {
  const trianglesMap = trianglesMapBuilder(gridDimensionsInTriangles.width, gridDimensionsInTriangles.height);

  // WARNING! we must find a way to not re-render Grid when activeFace change...

  // GOAL is to change the visible grid from triangles grid to points grid,
  // but conserve these two layers for related events

  // viewbox: must adjust to sizes calculated from gridDimensionsInTriangles to
  // true grid dimensions (based on triangle side = 1)
  return (
    <div className="Frame">
      <svg
        className="Frame-svg"
        viewBox={`0 0 1 2`}
      >
        <TrianglesGrid
          gridDimensionsInTriangles={gridDimensionsInTriangles}
          trianglesMap={trianglesMap}
          activeface={activeFace}
        />
      </svg>
    </div>
  );
}

export default Frame;
