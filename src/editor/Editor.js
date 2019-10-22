
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
    let color; // any css syntax accepted
    if (activeFace === 'top') {
      color = 'lightskyblue';
    } else if (activeFace === 'right') {
      color = 'mediumblue';
    } else if (activeFace === 'left') {
      color = 'royalblue';
    }
    const drawing = {
      origin: 'triangle', // other will be 'point' when implemented
      orientation: triangleMapData.orientation,
      points,
      color
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
