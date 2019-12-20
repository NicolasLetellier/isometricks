
import { saveAs } from 'file-saver';

// factor to multiply grid dimensions to get sensible pixel sizes
const IMAGE_SIZE_FACTOR = 30;

function buildAndSave(polygonStack, gridDimensions) {
  function polygons(stack) {
    let polygonsMarkup = '';

    stack.forEach((polygon) => {
      const points = polygon.points.reduce((acc, value) => {
        return (acc + `${value[0]},${value[1]} `);
      }, '');
      polygonsMarkup += `
  <polygon points="${points}" stroke="none" fill="${polygon.fill}" />`;
    });

    return polygonsMarkup;
  }

  const svgMarkup = `
<svg class="isometricks-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="${gridDimensions.width * IMAGE_SIZE_FACTOR}px" height="${gridDimensions.height * IMAGE_SIZE_FACTOR}px" preserveAspectRatio="xMinYMin" viewBox="0 0 ${gridDimensions.width} ${gridDimensions.height}">${polygons(polygonStack)}
</svg>
  `;

  const svgBlob = new Blob([svgMarkup], {type: "image/svg+xml"});

  saveAs(svgBlob, 'isometricks.svg');
}

export { buildAndSave };
