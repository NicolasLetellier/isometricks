
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
  // historyNavIndex === null : not currently in history navigation
  const [historyNavIndex, setHistoryNavIndex] = useState(null);

  // length shouldn't be less than 1
  const historyLastIndex = stacksHistory.length - 1;

  const trianglesMap = trianglesMapBuilder(gridDimensionsInTriangles.width, gridDimensionsInTriangles.height);

  function backwardInHistory() {
    if (historyNavIndex === null) {
      setHistoryNavIndex(historyLastIndex - 1);
    } else {
      setHistoryNavIndex(historyNavIndex - 1);
    }
  }

  function backwardInHistoryProp() {
    if (historyLastIndex === 0 || historyNavIndex === 0) {
      return null;
    } else {
      return backwardInHistory;
    }
  }

  function forwardInHistory() {
    if (historyNavIndex === historyLastIndex - 1) {
      setHistoryNavIndex(null);
    } else {
      setHistoryNavIndex(historyNavIndex + 1);
    }
  }

  function forwardInHistoryProp() {
    if (historyNavIndex === null) {
      return null;
    } else {
      return forwardInHistory;
    }
  }

  function currentHistoryIndex() {
    return (historyNavIndex === null) ? historyLastIndex : historyNavIndex;
  }

  // truncate forward history to add new stack if currently in history navigation
  function addPolygonToStack(polygon) {
    const previousPolygonStack = stacksHistory[currentHistoryIndex()];
    const actualisedPolygonStack = previousPolygonStack.concat(polygon);
    const slicedHistory = stacksHistory.slice(0, currentHistoryIndex() + 1);
    slicedHistory.push(actualisedPolygonStack);
    setStacksHistory(slicedHistory);
    setHistoryNavIndex(null);
  }

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

    addPolygonToStack(polygon);
  }

  return (
    <div className="Editor">
      <Toolbar
        setActiveFace={setActiveFace}
        backwardInHistory={backwardInHistoryProp()}
        forwardInHistory={forwardInHistoryProp()}
      />
      <Frame
        gridDimensionsInTriangles={gridDimensionsInTriangles}
        trianglesMap={trianglesMap}
        triangleClickHandler={triangleClickHandler}
        polygonStack={stacksHistory[currentHistoryIndex()]}
      />
    </div>
  );
}

export default Editor;
