
import React from 'react';
import './TrianglesGrid.css';

function TrianglesGrid({ gridDimensionsInTriangles, trianglesMap, triangleClickHandler }) {

  const trianglesPolygons = [];
  for (let x = 0; x < gridDimensionsInTriangles.width; x++) {
    for (let y = 0; y < gridDimensionsInTriangles.height; y++) {
      const triangleMapData = trianglesMap[x][y];

      const orientation = triangleMapData.orientation;
      const triangleGridCoord = triangleMapData.coordinates;
      const topCoord = triangleGridCoord.topVertexCoord;
      const sideCoord = triangleGridCoord.sideVertexCoord;
      const bottomCoord = triangleGridCoord.bottomVertexCoord;

      trianglesPolygons.push((
        <polygon
          key={`${x},${y}`}
          points={`${topCoord[0]},${topCoord[1]} ${sideCoord[0]},${sideCoord[1]} ${bottomCoord[0]},${bottomCoord[1]}`}
          data-orientation={orientation}
          stroke="silver"
          strokeWidth="0.01"
          fill="transparent"
          onClick={() => triangleClickHandler(
            {x, y},
            triangleMapData
          )}
        />
      ));
    }
  }

  // check g element syntax
  return (
    <g className="TrianglesGrid">
      {trianglesPolygons}
    </g>
  );
}

export default TrianglesGrid;
