
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
          fill="white"
        />
      ));
    }
  }

  return (
    <svg
      className="TrianglesGrid"
      viewBox={`0 0 ${gridDimensionsInTriangles.height} ${gridDimensionsInTriangles.height}`}
    >
      <rect
        className="TrianglesGrid-background"
        width="100"
        height="100"
        fill="silver"
      />
      {trianglesPolygons}
      <polygon
        points="1.2,2 3,4 4,4"
        stroke="green"
        fill="transparent"
        strokeWidth="0.1"
      />
    </svg>
  );
}

export default TrianglesGrid;
