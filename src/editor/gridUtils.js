
// WARNING: It is assumed that we will only use the hexagon
// orientation that is really usefull for isometric drawings:
// hexagons 'pointy topped', for a grid with vertical lines
// a LOT of calculations are extrapolated based on this assumption

// Here we define this value (1) as a universal basis of the project.
// This will help to visualize other values like svg grid dimensions
const TRIANGLE_EDGE_LENGTH = 1;

function giveTriangleHeight(triangleEdgeLength) {
  return Math.sqrt(3) / 2 * triangleEdgeLength;
}

// Give orientation of triangle, pointing to left or right
function giveTriangleOrientation(x, y) {
  // This rule works because we decided to start grid
  // at 0,0 with a left triangle.
  // Using % as we won't have negative coordinates.
  return (x % 2 === y % 2) ? 'left' : 'right';
}

// Coordinate system:
// starts at 0, 0 (top left)
// x (horizontal) increase to the right
// y (vertical) increase to the bottom

// Coordinates are given ordered, for any given triangle,
// by increasing y:
// first, top vertex coordinates
// second, coordinates of the sided vertex (pointing to left or right)
// third, bottom vertex coordinates
function giveTriangleCoordinates(x, y, orientation) {
  // for each triangle, we need to calculate:
  // two values of x: x1 and x2
  // and three values of y: y1, y2 and y3

  const x1 = giveTriangleHeight(x * TRIANGLE_EDGE_LENGTH);
  const x2 = giveTriangleHeight((x + 1) * TRIANGLE_EDGE_LENGTH);
  const y1 = y * (TRIANGLE_EDGE_LENGTH / 2);
  const y2 = (y * (TRIANGLE_EDGE_LENGTH / 2)) + (TRIANGLE_EDGE_LENGTH / 2);
  const y3 = (y * (TRIANGLE_EDGE_LENGTH / 2)) + TRIANGLE_EDGE_LENGTH;

  if (orientation === 'left') {
    return {
      topVertexCoord: [x2, y1],
      sideVertexCoord: [x1, y2],
      bottomVertexCoord: [x2, y3]
    };
  }
  if (orientation === 'right') {
    return {
      topVertexCoord: [x1, y1],
      sideVertexCoord: [x2, y2],
      bottomVertexCoord: [x1, y3]
    };
  }
}

function triangleData(x, y) {
  const orientation = giveTriangleOrientation(x, y);
  let data = {
    orientation,
    coordinates: giveTriangleCoordinates(x, y, orientation)
  };
  return data;
}

function trianglesMapBuilder(gridWidthInTriangles, gridHeightInTriangles) {
  const map = [];

  for (let x = 0; x < gridWidthInTriangles; x++) {
    map[x] = [];
    for (let y = 0; y < gridHeightInTriangles; y++) {
      map[x][y] = triangleData(x, y);
    }
  }
  return map;
}

function calculateGridDimensions(gridWidthInTriangles, gridHeightInTriangles) {
  const width = gridWidthInTriangles * giveTriangleHeight(TRIANGLE_EDGE_LENGTH);
  const height = ((gridHeightInTriangles - 1) * TRIANGLE_EDGE_LENGTH / 2) + TRIANGLE_EDGE_LENGTH;
  return {
    width,
    height
  };
}

export { trianglesMapBuilder, calculateGridDimensions };
