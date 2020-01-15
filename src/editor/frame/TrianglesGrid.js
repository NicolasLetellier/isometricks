
import React from 'react';
import './TrianglesGrid.css';

function TrianglesGrid({
  presentation,
  gridDimensionsInTriangles,
  trianglesMap,
  triangleClickHandler
}) {

  const trianglesPolygons = [];
  for (let x = 0; x < gridDimensionsInTriangles.width; x++) {
    for (let y = 0; y < gridDimensionsInTriangles.height; y++) {
      const triangleData = trianglesMap[x][y];

      trianglesPolygons.push((
        <polygon
          key={`${x},${y}`}
          points={triangleData.triangleCoord}
          data-orientation={triangleData.orientation}
          stroke={presentation.stroke}
          strokeWidth={presentation.strokeWidth}
          fill={presentation.fill}
          onClick={triangleClickHandler && (
            () => triangleClickHandler(triangleData)
          )}
        />
      ));
    }
  }

  // TO DO: check g element syntax
  return (
    <g className="TrianglesGrid">
      {trianglesPolygons}
    </g>
  );
}

export default TrianglesGrid;
