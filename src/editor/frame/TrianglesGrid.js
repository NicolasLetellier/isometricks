
import React from 'react';
import './TrianglesGrid.css';

function TrianglesGrid({ gridDimensionsInTriangles, trianglesMap }) {
  const trianglesPolygons = [];
  for (let x = 0; x < gridDimensionsInTriangles.width; x++) {
    for (let y = 0; y < gridDimensionsInTriangles.height; y++) {
      const triangleData = trianglesMap[x][y];
      const orientation = triangleData.orientation;
      const triangleCoord = triangleData.coordinates;
      const topCoord = triangleCoord.topVertexCoord;
      const sideCoord = triangleCoord.sideVertexCoord;
      const bottomCoord = triangleCoord.bottomVertexCoord;
      trianglesPolygons.push((
        <polygon
          key={`${x},${y}`}
          points={`${topCoord[0]},${topCoord[1]} ${sideCoord[0]},${sideCoord[1]} ${bottomCoord[0]},${bottomCoord[1]}`}
          data-orientation={orientation}
          stroke="grey"
          strokeWidth="0.002"
          fill="transparent"
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
