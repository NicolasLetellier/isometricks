
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

      const orientation = triangleData.orientation;
      const triangleGridCoord = triangleData.coordinates;
      const topCoord = triangleGridCoord.topVertexCoord;
      const sideCoord = triangleGridCoord.sideVertexCoord;
      const bottomCoord = triangleGridCoord.bottomVertexCoord;

      trianglesPolygons.push((
        <polygon
          key={`${x},${y}`}
          points={`${topCoord[0]},${topCoord[1]} ${sideCoord[0]},${sideCoord[1]} ${bottomCoord[0]},${bottomCoord[1]}`}
          data-orientation={orientation}
          stroke={presentation.stroke}
          strokeWidth={presentation.strokeWidth}
          fill={presentation.fill}
          onClick={triangleClickHandler && (
            () => triangleClickHandler(
              {x, y},
              triangleData
            )
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
