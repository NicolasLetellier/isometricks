
function orientation(x, y) {
  // This rule works because we decided to start grid
  // at 0,0 with a left triangle.
  // Using % as we won't have negative coordinates.
  return (x % 2 === y % 2) ? 'left' : 'right';
}

function triangleBuilder(x, y) {
  let triangle = {
    orientation: orientation(x, y)
  };
  return triangle;
}

function mapBuilder(gridWidthInCubes, gridHeightInCubes) {
  const gridWidthInTriangles = gridWidthInCubes * 2; // always even
  const gridHeightInTriangles = gridHeightInCubes * 2 + 1; // always odd

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
