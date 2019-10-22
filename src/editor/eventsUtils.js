
// may be interesant to return points directly as string
// as in svg syntax??????
function calculateFacePoints(
  triangleMapCoord,
  triangleMapData,
  trianglesMap,
  activeFace
) {
  const orientation = triangleMapData.orientation;
  const eventTriangleCoord = triangleMapData.coordinates;

  const points = [];
  if (activeFace === 'left' || activeFace === 'right') {
    if (orientation === activeFace) {
      const upperTriangleCoord = trianglesMap[triangleMapCoord.x][triangleMapCoord.y - 1].coordinates;
      points.push(upperTriangleCoord.topVertexCoord);
      points.push(eventTriangleCoord.topVertexCoord);
      points.push(eventTriangleCoord.bottomVertexCoord);
      points.push(eventTriangleCoord.sideVertexCoord);
    } else {
      const lowerTriangleCoord = trianglesMap[triangleMapCoord.x][triangleMapCoord.y + 1].coordinates;
      points.push(eventTriangleCoord.topVertexCoord);
      points.push(eventTriangleCoord.sideVertexCoord);
      points.push(lowerTriangleCoord.bottomVertexCoord);
      points.push(eventTriangleCoord.bottomVertexCoord);
    }
  } else if (activeFace === 'top') {
    if (orientation === 'left') {
      const onRightTriangleCoord = trianglesMap[triangleMapCoord.x + 1][triangleMapCoord.y].coordinates;
      points.push(eventTriangleCoord.topVertexCoord);
      points.push(onRightTriangleCoord.sideVertexCoord);
      points.push(eventTriangleCoord.bottomVertexCoord);
      points.push(eventTriangleCoord.sideVertexCoord);
    } else if (orientation === 'right') {
      const onLeftTriangleCoord = trianglesMap[triangleMapCoord.x - 1][triangleMapCoord.y].coordinates;
      points.push(eventTriangleCoord.topVertexCoord);
      points.push(eventTriangleCoord.sideVertexCoord);
      points.push(eventTriangleCoord.bottomVertexCoord);
      points.push(onLeftTriangleCoord.sideVertexCoord);
    }
  }
  return points;
}

export { calculateFacePoints };
