
// return points in an array of coordinates, not svg syntax,
// as: [[x1,y1], [x2,y2], [x3,y3], [x4,y4]]
// (to have the same format for future 'shape' points, that COULD need
// it for history navigation...) > BUT performance considerations (i.e. looping on it twice)?
// return undefined if complementary triangle for this face is out of grid.

// for every activeFace, points coords are ordened in only one way,
// to enable 'repeated faces' comparisons
// BE CAREFULL, this rule won't apply to 'shape' polygons!!
function calculateFacePoints(
  triangleCoord,
  triangleData,
  trianglesMap,
  activeFace
) {
  const orientation = triangleData.orientation;
  const eventTriangleCoord = triangleData.coordinates;

  const points = [];
  if (activeFace === 'left' || activeFace === 'right') {
    if (orientation === activeFace) {
      const upperTriangle = trianglesMap[triangleCoord.x][triangleCoord.y - 1];
      if (upperTriangle === undefined) { // complementary triangle for this face is out of grid
        return;
      }
      const upperTriangleCoord = upperTriangle.coordinates;
      points.push(upperTriangleCoord.topVertexCoord);
      points.push(eventTriangleCoord.topVertexCoord);
      points.push(eventTriangleCoord.bottomVertexCoord);
      points.push(eventTriangleCoord.sideVertexCoord);
    } else {
      const lowerTriangle = trianglesMap[triangleCoord.x][triangleCoord.y + 1];
      if (lowerTriangle === undefined) { // complementary triangle for this face is out of grid
        return;
      }
      const lowerTriangleCoord = lowerTriangle.coordinates;
      points.push(eventTriangleCoord.topVertexCoord);
      points.push(eventTriangleCoord.sideVertexCoord);
      points.push(lowerTriangleCoord.bottomVertexCoord);
      points.push(eventTriangleCoord.bottomVertexCoord);
    }
  } else if (activeFace === 'top') {
    if (orientation === 'left') {
      const onRightRow = trianglesMap[triangleCoord.x + 1];
      if (onRightRow === undefined) { // complementary triangle for this face is out of grid
        return;
      }
      const onRightTriangleCoord = onRightRow[triangleCoord.y].coordinates;
      points.push(eventTriangleCoord.topVertexCoord);
      points.push(onRightTriangleCoord.sideVertexCoord);
      points.push(eventTriangleCoord.bottomVertexCoord);
      points.push(eventTriangleCoord.sideVertexCoord);
    } else if (orientation === 'right') {
      const onLeftRow = trianglesMap[triangleCoord.x - 1];
      if (onLeftRow === undefined) { // complementary triangle for this face is out of grid
        return;
      }
      const onLeftTriangleCoord = onLeftRow[triangleCoord.y].coordinates;
      points.push(eventTriangleCoord.topVertexCoord);
      points.push(eventTriangleCoord.sideVertexCoord);
      points.push(eventTriangleCoord.bottomVertexCoord);
      points.push(onLeftTriangleCoord.sideVertexCoord);
    }
  }
  return points;
}

export { calculateFacePoints };
