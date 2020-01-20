
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

const TRIANGLE_HEIGHT = giveTriangleHeight(TRIANGLE_EDGE_LENGTH);

// Coordinate system:
// starts at 0, 0 (top left)
// x (horizontal) increase to the right
// y (vertical) increase to the bottom

// (Be aware: frame viewbox is limiting visible height, grid is higher)

// Give orientation of triangle, pointing to left or right
function giveTriangleOrientation(x, y) {
  // This rule works because we decided to start grid
  // at 0,0 with a right triangle (style decision in conjunction
  // with the viewbox limitation for fully drawable frame).
  // Using % as we won't have negative coordinates.
  return (x % 2 === y % 2) ? 'right' : 'left';
}

// All coordinates, triangles coordinates as well as related faces
// coordinates, are given in this order:
// first the most upper point (vertex), then other points
// are indicated in the clockwise order of the points.
// All coordinates are given in the SVG points syntax.
// Related faces coords can not get negative values, neither values exceeding the
// grid dimensions maximums: if the fourth point coord is out of grid,
// drawing will be limited to the event triangle only (i.e. half of the face)
function giveTriangleData(x, y, gridDimensions, orientation) {
  // for each triangle, we need to calculate:

  // two values of x: x1 and x2
  const x1 = x * TRIANGLE_HEIGHT;
  const x2 = x1 + TRIANGLE_HEIGHT;

  // and three values of y: y1, y2 and y3
  const y1 = y * (TRIANGLE_EDGE_LENGTH / 2);
  const y2 = y1 + (TRIANGLE_EDGE_LENGTH / 2);
  const y3 = y1 + TRIANGLE_EDGE_LENGTH;

  // for the three related faces, we need to calculate:

  // two other y values
  const yUp = y1 - (TRIANGLE_EDGE_LENGTH / 2);
  const yDown = y3 + (TRIANGLE_EDGE_LENGTH / 2);

  // and another x value (this last x depending on triangle orientation)
  let xSide;
  if (orientation === 'left') {
    xSide = x2 + TRIANGLE_HEIGHT;
  }
  if (orientation === 'right') {
    xSide = x1 - TRIANGLE_HEIGHT;
  }

  // for every kind of related face, points coords MUST be ordened in only one way
  // (first upper point then clockwise order)
  // to enable 'repeated faces' comparisons with actualiseStack method

  let triangleCoord, topFaceCoord, leftFaceCoord, rightFaceCoord;
  if (orientation === 'left') {
    triangleCoord = `${x2},${y1} ${x2},${y3} ${x1},${y2}`;
    topFaceCoord = xSide > gridDimensions.width ? triangleCoord : `${x2},${y1} ${xSide},${y2} ${x2},${y3} ${x1},${y2}`;
    leftFaceCoord = yUp < 0 ? triangleCoord : `${x1},${yUp} ${x2},${y1} ${x2},${y3} ${x1},${y2}`;
    rightFaceCoord = yDown > gridDimensions.height ? triangleCoord : `${x2},${y1} ${x2},${y3} ${x1},${yDown} ${x1},${y2}`;
  }
  if (orientation === 'right') {
    triangleCoord = `${x1},${y1} ${x2},${y2} ${x1},${y3}`;
    topFaceCoord = xSide < 0 ? triangleCoord : `${x1},${y1} ${x2},${y2} ${x1},${y3} ${xSide},${y2}`;
    rightFaceCoord = yUp < 0 ? triangleCoord : `${x2},${yUp} ${x2},${y2} ${x1},${y3} ${x1},${y1}`;
    leftFaceCoord =  yDown > gridDimensions.height ? triangleCoord : `${x1},${y1} ${x2},${y2} ${x2},${yDown} ${x1},${y3}`;
  }

  return { orientation, triangleCoord, topFaceCoord, leftFaceCoord, rightFaceCoord };
}

function trianglesMapBuilder(gridWidthInTriangles, gridHeightInTriangles) {
  const gridDimensions = calculateGridDimensions(gridWidthInTriangles, gridHeightInTriangles);

  const map = [];

  for (let x = 0; x < gridWidthInTriangles; x++) {
    map[x] = [];
    for (let y = 0; y < gridHeightInTriangles; y++) {
      const orientation = giveTriangleOrientation(x, y);
      map[x][y] = giveTriangleData(x, y, gridDimensions, orientation);
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

export { trianglesMapBuilder, calculateGridDimensions, TRIANGLE_EDGE_LENGTH };
