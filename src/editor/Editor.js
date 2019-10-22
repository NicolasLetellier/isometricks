
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
  // activeface set to null: inactivate any click event
  const [activeFace, setActiveFace] = useState('top');
  const [drawingHistory, setDrawingHistory] = useState([]);

  const trianglesMap = trianglesMapBuilder(gridDimensionsInTriangles.width, gridDimensionsInTriangles.height);

  function triangleClickHandler(triangleMapCoord, triangleMapData) {
    const points = calculateFacePoints(
      triangleMapCoord,
      triangleMapData,
      trianglesMap,
      activeFace
    );
    let fill; // any css color syntax accepted
    if (activeFace === 'top') {
      fill = 'lightskyblue';
    } else if (activeFace === 'right') {
      fill = 'mediumblue';
    } else if (activeFace === 'left') {
      fill = 'royalblue';
    }
    const drawing = {
      type: 'face', // other will be 'shape' when implemented
      points,
      fill
      // stroke and stroke-width: configurables too!
      // orientation: needed?
    };
    const actualisedDrawingHistory = drawingHistory.concat(drawing);
    setDrawingHistory(actualisedDrawingHistory);
  }

  return (
    <div className="Editor">
      <Toolbar setActiveFace={setActiveFace} />
      <Frame
        gridDimensionsInTriangles={gridDimensionsInTriangles}
        trianglesMap={trianglesMap}
        triangleClickHandler={triangleClickHandler}
        drawingHistory={drawingHistory}
      />
    </div>
  );
}

export default Editor;
