
import React from 'react';
import TrianglesGrid from './TrianglesGrid';
import { trianglesMapBuilder } from './gridUtils';
import './Frame.css';


function Frame({ gridDimensionsInTriangles, activeFace }) {
  const trianglesMap = trianglesMapBuilder(gridDimensionsInTriangles.width, gridDimensionsInTriangles.height);

  // WARNING! we must find a way to not re-render Grid when activeFace change...

  // GOAL is to change from triangles grid to points grid and adding
  // the points events layer too
  return (
    <div className="Frame">
      <TrianglesGrid
        gridDimensionsInTriangles={gridDimensionsInTriangles}
        trianglesMap={trianglesMap}
      />
      {/* <TrianglesEventsLayer
        gridDimensionsInTriangles={gridDimensionsInTriangles}
        trianglesMap={trianglesMap}
        activeface={activeFace}
      /> */}
    </div>
  );
}

export default Frame;
