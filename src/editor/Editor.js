
import React, { useState, useEffect } from 'react';

import { buildAndSave } from './downloadUtils';

import Toolbar from './toolbar/Toolbar';
import Frame from './frame/Frame';
import './Editor.css';

// default grid size on start,
// indicated in triangles
const START_GRID_DIMENSIONS = {
  width: 16,
  height: 35
};

// default colors on start
const LEFT_START_COLOR = 'royalblue';
const TOP_START_COLOR = 'lightskyblue';
const RIGHT_START_COLOR = 'mediumblue';


function Editor() {
  const [gridDimensionsInTriangles, setGridDimensionsInTriangles] = useState(START_GRID_DIMENSIONS);
  // activeFace possible values: 'left', 'top', 'right', null (invalidate events)
  const [activeFace, setActiveFace] = useState('left');
  // onDialog possible values: null, 'grid size', 'color'
  const [onDialog, setOnDialog] = useState(null);
  // history array of polygon stacks
  // polygon stack: array of polygon objects to be draw
  const [stacksHistory, setStacksHistory] = useState([[]]);
  // historyNavIndex === null : not currently in history navigation
  const [historyNavIndex, setHistoryNavIndex] = useState(null);

  // to reset all drawing when new grid size is selected
  useEffect(() => {
    setStacksHistory([[]]);
    setHistoryNavIndex(null);
  }, [gridDimensionsInTriangles]);

  // length shouldn't be less than 1
  const historyLastIndex = stacksHistory.length - 1;

  function currentHistoryIndex() {
    return (historyNavIndex === null) ? historyLastIndex : historyNavIndex;
  }

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

  // check if this face is exactly the same as an older one,
  // and remove it because it would be exactly covered by the new one.
  // (maybe disable this if in case of use of transparent colors for upper one??)
  // BE CAREFULL, it won't work in comparing 'shape' coords! (if ever implemented)
  // if exactly repeated polygons (same colors, etc...) it will give the impression
  // when using history nav that nothing was done on this action... but necesary if
  // some parts of other faces are between the two equals polygons (stack order
  // has to be corrected)
  function actualiseStack(previousStack, polygon) {
    let previousStackCopy = [...previousStack];
    for (let i = 0; i < previousStackCopy.length; i++) {
      const previousPolygonPoints = previousStackCopy[i].points;
      if (previousPolygonPoints === polygon.points) {
        previousStackCopy.splice(i, 1);
        break; // no possible other repeated faces as it's always checked
      }
    }
    return previousStackCopy.concat(polygon);
  }

  // truncate forward history to add new stack if currently in history navigation
  function addPolygonIntoStacksHistory(polygon) {
    const previousPolygonStack = stacksHistory[currentHistoryIndex()];
    const actualisedPolygonStack = actualiseStack(previousPolygonStack, polygon);
    const slicedHistory = stacksHistory.slice(0, currentHistoryIndex() + 1);
    slicedHistory.push(actualisedPolygonStack);
    setStacksHistory(slicedHistory);
    setHistoryNavIndex(null);
  }

  function triangleClickHandler(triangleData) {
    // activeFace set to null: inactivate any click event
    // onDialog not null: inactivate any click event
    if (activeFace === null || onDialog !== null) {
      return;
    }

    let points; // coordinates of the polygon's points in SVG syntax
    let fill; // any css color syntax accepted
    if (activeFace === 'left') {
      points = triangleData.leftFaceCoord;
      fill = LEFT_START_COLOR;
    } else if (activeFace === 'top') {
      points = triangleData.topFaceCoord;
      fill = TOP_START_COLOR;
    } else if (activeFace === 'right') {
      points = triangleData.rightFaceCoord;
      fill = RIGHT_START_COLOR;
    }

    const polygon = {
      type: 'face', // other will be 'shape' if ever implemented?
      points,
      fill
      // stroke and stroke-width: configurables too?
      // activeFace: needed? > probably, to tag the polygon
      // for the feature of changing color of all similar faces at once
    };

    addPolygonIntoStacksHistory(polygon);
  }

  function buildAndSaveFile() {
    const displayedPolygonStack = stacksHistory[currentHistoryIndex()];
    buildAndSave(displayedPolygonStack, gridDimensionsInTriangles);
  }

  return (
    <div className="Editor">
      <Toolbar
        activeFace={activeFace}
        setActiveFace={setActiveFace}
        onDialog={onDialog}
        setOnDialog={setOnDialog}
        backwardInHistory={backwardInHistoryProp()}
        forwardInHistory={forwardInHistoryProp()}
        setGridDimensionsInTriangles={setGridDimensionsInTriangles}
        buildAndSaveFile={buildAndSaveFile}
      />
      <Frame
        gridDimensionsInTriangles={gridDimensionsInTriangles}
        triangleClickHandler={triangleClickHandler}
        polygonStack={stacksHistory[currentHistoryIndex()]}
      />
    </div>
  );
}

export default Editor;
