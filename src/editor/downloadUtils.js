
function build(polygonStack, gridDimensions) {
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
<svg class="isometricks-svg" viewBox="0 0 ${gridDimensions.width} ${gridDimensions.height}">${polygons(polygonStack)}
</svg>
  `;

  return svgMarkup;
}

function save() {

}

export { build, save };
