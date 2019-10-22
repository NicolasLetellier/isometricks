
import React from 'react';
import TrianglesGrid from './TrianglesGrid';
import { calculateGridDimensions } from './../gridUtils';
import './Frame.css';


function Frame({
  gridDimensionsInTriangles,
  trianglesMap,
  triangleClickHandler,
  drawingHistory
}) {
  const gridDimensions = calculateGridDimensions(gridDimensionsInTriangles.width, gridDimensionsInTriangles.height);

  // WARNING! we must find a way to not re-render Grid when activeFace,
  // colors or drawing history change...

  // GOAL is to change the visible grid from triangles grid to points grid,
  // but conserve these two layers for related events

  const triangleBackgroundPresentation = {
    stroke: 'silver',
    strokeWidth: '0.01',
    fill: 'transparent'
  };

  const triangleEventsPresentation = {
    stroke: 'none',
    fill: 'transparent'
  };

  const drawingPolygons = [];

  drawingHistory.forEach((drawing, index) => {
    const points = drawing.points.reduce((acc, value) => {
      return (acc + `${value[0]},${value[1]} `);
    }, '');
    drawingPolygons.push((
      <polygon
        key={index}
        points={points}
        stroke="none"
        fill={drawing.fill}
      />
    ));
  });

  return (
    <div className="Frame">
      <svg
        className="Frame-svg"
        viewBox={`0 0 ${gridDimensions.width} ${gridDimensions.height}`}
        preserveAspectRatio="xMidYMin"
      >
        <rect
          x="0"
          y="0"
          width={gridDimensions.width}
          height={gridDimensions.height}
          className="Frame-background"
          stroke="none"
          fill={'ivory'}
        />
        <TrianglesGrid
          presentation={triangleBackgroundPresentation}
          gridDimensionsInTriangles={gridDimensionsInTriangles}
          trianglesMap={trianglesMap}
          triangleClickHandler={triangleClickHandler}
        />
        {drawingPolygons}
        <TrianglesGrid
          presentation={triangleEventsPresentation}
          gridDimensionsInTriangles={gridDimensionsInTriangles}
          trianglesMap={trianglesMap}
          triangleClickHandler={triangleClickHandler}
        />
      </svg>
    </div>
  );
}

export default Frame;
