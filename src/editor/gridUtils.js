
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

// Give orientation of triangle, pointing to left or right
function giveTriangleOrientation(x, y) {
  // This rule works because we decided to start grid
  // at 0,0 with a right triangle (style decision in conjunction
  // with the viewbox limitation for fully drawable frame).
  // Using % as we won't have negative coordinates.
  return (x % 2 === y % 2) ? 'right' : 'left';
}

// Coordinate system:
// starts at 0, 0 (top left)
// x (horizontal) increase to the right
// y (vertical) increase to the bottom

// (Be aware: frame viewbox is limiting visible height, grid is higher)

// Triangle coordinates are given ordered, for any given triangle,
// by increasing y:
// first, top vertex coordinates
// second, coordinates of the sided vertex (pointing to left or right)
// third, bottom vertex coordinates
// and delivered directly as SVG points syntax.
// related faces coordinates are also delivered directly as SVG points syntax.
// related faces coords can get negative values, or values upper than the grid
// dimensions maximums, and that's ok as we limit viewable edges with viewbox.
function giveCoordinates(x, y, orientation) {
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

  // for every activeFace, points coords MUST be ordened in only one way (TO DO: check that!)
  // to enable 'repeated faces' comparisons with actualiseStack

  let triangleCoord, topFaceCoord, leftFaceCoord, rightFaceCoord;
  if (orientation === 'left') {
    triangleCoord = `${x2},${y1} ${x1},${y2} ${x2},${y3}`;
    topFaceCoord = `${x2},${y1} ${x1},${y2} ${x2},${y3} ${xSide},${y2}`;
    leftFaceCoord = `${x2},${y1} ${x1},${yUp} ${x1},${y2} ${x2},${y3}`;
    rightFaceCoord = `${x2},${y1} ${x1},${y2} ${x1},${yDown} ${x2},${y3}`;
  }
  if (orientation === 'right') {
    triangleCoord = `${x1},${y1} ${x2},${y2} ${x1},${y3}`;
    topFaceCoord = `${x1},${y1} ${x2},${y2} ${x1},${y3} ${xSide},${y2}`;
    rightFaceCoord = `${x1},${y1} ${x2},${yUp} ${x2},${y2} ${x1},${y3}`;
    leftFaceCoord = `${x1},${y1} ${x2},${y2} ${x2},${yDown} ${x1},${y3}`;
  }

  return { triangleCoord, topFaceCoord, leftFaceCoord, rightFaceCoord };
}

function triangleData(x, y) {
  const orientation = giveTriangleOrientation(x, y);
  const {
    triangleCoord,
    topFaceCoord,
    leftFaceCoord,
    rightFaceCoord
  } = giveCoordinates(x, y, orientation);

 return {
    orientation,
    triangleCoord,
    topFaceCoord,
    leftFaceCoord,
    rightFaceCoord
  };
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

export { trianglesMapBuilder, calculateGridDimensions, TRIANGLE_EDGE_LENGTH };
