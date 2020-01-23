
import React from 'react';
import TrianglesGrid from './TrianglesGrid';
import { trianglesMapBuilder, calculateGridDimensions, TRIANGLE_EDGE_LENGTH } from './../gridUtils';
import './Frame.css';


function Frame({
  gridDimensionsInTriangles,
  backgroundColor,
  triangleClickHandler,
  polygonStack
}) {
  const trianglesMap = trianglesMapBuilder(gridDimensionsInTriangles.width, gridDimensionsInTriangles.height);
  const gridDimensions = calculateGridDimensions(gridDimensionsInTriangles.width, gridDimensionsInTriangles.height);

  // WARNING! we must find a way to not re-render Grid when activeFace,
  // colors or drawing history change... but is it re-rendering? to be checked

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

  polygonStack.forEach((polygon, index) => {
    drawingPolygons.push((
      <polygon
        key={index}
        points={polygon.points}
        stroke="none"
        fill={polygon.fill}
      />
    ));
  });

  // we want the SVG viewbox to be limited to the fully drawable part of the
  // grid: we do not want any triangle (or part of) that couldn't be colorized
  // on the frame, and all must be colorizable with any of the three faces colors.
  // So the viewbox cut the first half of the first triangle row and the last half
  // of the last triangle row
  return (
    <div className="Frame">
      <svg
        className="Frame-svg"
        viewBox={`0 ${TRIANGLE_EDGE_LENGTH / 2} ${gridDimensions.width} ${gridDimensions.height - TRIANGLE_EDGE_LENGTH}`}
        preserveAspectRatio="xMidYMin"
      >
        <rect
          x="0"
          y="0"
          width={gridDimensions.width}
          height={gridDimensions.height}
          className="Frame-background"
          stroke="none"
          fill={backgroundColor}
        />
        <TrianglesGrid
          presentation={triangleBackgroundPresentation}
          gridDimensionsInTriangles={gridDimensionsInTriangles}
          trianglesMap={trianglesMap}
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
