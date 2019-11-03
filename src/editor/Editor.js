
import React, { useState } from 'react';

import { trianglesMapBuilder } from './gridUtils';
import { calculateFacePoints } from './eventsUtils';

import Toolbar from './toolbar/Toolbar';
import Frame from './frame/Frame';
import './Editor.css';

// to start before having grid size selector,
// indicated in triangles
const FIXED_GRID_DIMENSIONS = {
  width: 33,
  height: 45
};

function Editor() {
  const [gridDimensionsInTriangles, setGridDimensionsInTriangles] = useState(FIXED_GRID_DIMENSIONS);
  const [activeFace, setActiveFace] = useState(null);
  // history array of polygon stacks
  // polygon stack: array of polygon objects to be draw
  const [stacksHistory, setStacksHistory] = useState([[]]);

  const trianglesMap = trianglesMapBuilder(gridDimensionsInTriangles.width, gridDimensionsInTriangles.height);

  function triangleClickHandler(triangleMapCoord, triangleMapData) {
    if (activeFace === null) { // activeFace set to null: inactivate any click event
      return;
    }

    const points = calculateFacePoints(
      triangleMapCoord,
      triangleMapData,
      trianglesMap,
      activeFace
    );

    if (points === undefined) { // invalid event on grid edge
      return;
    }

    let fill; // any css color syntax accepted
    if (activeFace === 'top') {
      fill = 'lightskyblue';
    } else if (activeFace === 'right') {
      fill = 'mediumblue';
    } else if (activeFace === 'left') {
      fill = 'royalblue';
    }

    const polygon = {
      type: 'face', // other will be 'shape' when implemented
      points,
      fill
      // stroke and stroke-width: configurables too!
      // orientation: needed? > probably for changing all
      // similar faces color at once and for detecting exactly repeated faces
    };

    const previousPolygonStack = stacksHistory[stacksHistory.length - 1];
    const actualisedPolygonStack = previousPolygonStack.concat(polygon);
    const stacksHistoryCopy = [...stacksHistory];
    stacksHistoryCopy.push(actualisedPolygonStack);
    setStacksHistory(stacksHistoryCopy);
  }

  return (
    <div className="Editor">
      <Toolbar setActiveFace={setActiveFace} />
      <Frame
        gridDimensionsInTriangles={gridDimensionsInTriangles}
        trianglesMap={trianglesMap}
        triangleClickHandler={triangleClickHandler}
        polygonStack={stacksHistory[stacksHistory.length - 1]}
      />
    </div>
  );
}

export default Editor;
