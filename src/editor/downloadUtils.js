
import { saveAs } from 'file-saver';
import { calculateGridDimensions, TRIANGLE_EDGE_LENGTH } from './gridUtils';

// factor to multiply grid dimensions to get sensible pixel sizes
const IMAGE_SIZE_FACTOR = 30;

function buildAndSave(polygonStack, gridDimensionsInTriangles) {
  function polygons(stack) {
    let polygonsMarkup = '';

    stack.forEach((polygon) => {
      polygonsMarkup += `
  <polygon points="${polygon.points}" stroke="none" fill="${polygon.fill}" />`;
    });

    return polygonsMarkup;
  }

  const gridDimensions = calculateGridDimensions(gridDimensionsInTriangles.width, gridDimensionsInTriangles.height);
  // as for the frame , here the viewbox limits the viewable part of the grid:
  // the grid is higher than the viewbox, and faces draw on its edges can surpass its
  // limits (see giveCoordinates method in gridUtils).
  const viewBox = `0 ${TRIANGLE_EDGE_LENGTH / 2} ${gridDimensions.width} ${gridDimensions.height - TRIANGLE_EDGE_LENGTH}`;

  // SVG height is calculated to be proportional as viewbox height
  const svgMarkup = `
<svg class="isometricks-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="${gridDimensions.width * IMAGE_SIZE_FACTOR}px" height="${(gridDimensions.height - TRIANGLE_EDGE_LENGTH) * IMAGE_SIZE_FACTOR}px" preserveAspectRatio="xMinYMin" viewBox="${viewBox}">${polygons(polygonStack)}
</svg>
  `;

  const svgBlob = new Blob([svgMarkup], {type: "image/svg+xml"});

  saveAs(svgBlob, 'isometricks.svg');
}

export { buildAndSave };
