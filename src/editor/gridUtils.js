
// WARNING: It is assumed that we will only use the hexagon
// orientation that is really usefull for isometric drawings:
// hexagons 'pointy topped'

// Here we define this value as a universal basis of the project.
// This will help to compute other values like svg grid dimensions
// with only the 2D array dimensions
const TRIANGLE_EDGE_LENGTH = 1;

function triangleHeight(triangleEdgeLength) {
  return Math.sqrt(3) / 2 * triangleEdgeLength;
}

// Give orientation of triangle, pointing to left or right
function giveOrientation(x, y) {
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
function giveCoordinates(x, y, orientation) {
  // for each triangle, we need to calculate:
  // two values of x: x1 and x2
  // and three values of y: y1, y2 and y3

  const x1 = triangleHeight(x * TRIANGLE_EDGE_LENGTH);
  const x2 = triangleHeight((x + 1) * TRIANGLE_EDGE_LENGTH);
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

function triangleBuilder(x, y) {
  const orientation = giveOrientation(x, y);
  let triangle = {
    orientation,
    coordinates: giveCoordinates(x, y, orientation)
  };
  return triangle;
}

// dimensions in cubes represent:
// width: cubes touching each other horizontally by only their side edges (not faces),
// height: cubes touching each other as if they're stacked (upper and
// bottom faces touching each other)

function convertWidthInTrangles(gridWidthInCubes) {
  return gridWidthInCubes * 2; // always even
}

function convertHeightInTriangles(gridHeightInCubes) {
  return gridHeightInCubes * 2 + 1; // always odd
}

function mapBuilder(gridWidthInCubes, gridHeightInCubes) {
  const gridWidthInTriangles = convertWidthInTrangles(gridWidthInCubes);
  const gridHeightInTriangles = convertHeightInTriangles(gridHeightInCubes);

  const map = [];

  for (let x = 0; x < gridWidthInTriangles; x++) {
    map[x] = [];
    for (let y = 0; y < gridHeightInTriangles; y++) {
      map[x][y] = triangleBuilder(x, y);
    }
  }
  return map;
}

export { mapBuilder };
