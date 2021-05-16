
import React, { useState, useEffect } from 'react';

import { buildAndSave } from './downloadUtils';

import Toolbar from './toolbar/Toolbar';
import Frame from './frame/Frame';
import './Editor.css';

// default grid size on start,
// indicated in triangles
const START_GRID_DIMENSIONS = {
  width: 16,
  height: 39
};

// default colors on start
const LEFT_START_COLOR = 'dodgerblue';
const TOP_START_COLOR = 'lightskyblue';
const RIGHT_START_COLOR = 'mediumblue';
const BACKGROUND_START_COLOR = 'white';


function Editor() {
  const [gridDimensionsInTriangles, setGridDimensionsInTriangles] = useState(START_GRID_DIMENSIONS);
  // activeFace possible values: 'left', 'top', 'right', null (invalidate events)
  const [activeFace, setActiveFace] = useState('left');
  // selectedColors must be an object as {left: '', top: '', right: '', background: ''}
  const [selectedColors, setSelectedColors] = useState({
    left: LEFT_START_COLOR,
    top: TOP_START_COLOR,
    right: RIGHT_START_COLOR,
    background: BACKGROUND_START_COLOR
  });
  // onErasing: boolean
  const [onErasing, setOnErasing] = useState(false);
  // onDialog possible values: null, 'grid size', 'palette'
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
    setOnErasing(false);
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
  // some parts of other faces are between the two equals polygons (when stack order
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

  // add polygon to copy of previous polygon stack
  function addPolygonToPreviousStack(polygon) {
    const previousPolygonStack = stacksHistory[currentHistoryIndex()];
    const actualisedPolygonStack = actualiseStack(previousPolygonStack, polygon);
    return actualisedPolygonStack;
  }

  // truncate forward history to add new stack if currently in history navigation
  function addNewStackToHistory(stack) {
    const slicedHistory = stacksHistory.slice(0, currentHistoryIndex() + 1);
    slicedHistory.push(stack);
    setStacksHistory(slicedHistory);
    setHistoryNavIndex(null);
  }

  // based on which face is active, return polygon related to clicked triangle
  function relatedFacePolygon(activeFace, triangleData, selectedColors) {
    let points; // coordinates of the polygon's points in SVG syntax (string)
    let fill; // any css color syntax accepted (string)
    if (activeFace === 'left') {
      points = triangleData.leftFaceCoord;
      fill = selectedColors.left;
    } else if (activeFace === 'top') {
      points = triangleData.topFaceCoord;
      fill = selectedColors.top;
    } else if (activeFace === 'right') {
      points = triangleData.rightFaceCoord;
      fill = selectedColors.right;
    }

    const polygon = {
      type: 'face', // other will be 'shape' if ever implemented?
      face: activeFace,
      points,
      fill,
      // activeFace: needed? > probably, to tag the polygon
      // for the feature of changing color of all similar faces at once.
      // stroke and stroke-width: configurables too?
    };
    return polygon;
  };

  function eraseClickedPolygon(triangleData) {
    const previousPolygonStack = stacksHistory[currentHistoryIndex()];
    let previousStackCopy = [...previousPolygonStack];
    for (let i = 0; i < previousStackCopy.length; i++) {
      // we are first erasing faces on top of stack: checking from
      // the final of the array
      const reversedIndex = previousStackCopy.length - (i + 1);
      const polygonPoints = previousStackCopy[reversedIndex].points;
      const pointsCoincidence = polygonPoints === triangleData.leftFaceCoord
        || polygonPoints === triangleData.topFaceCoord
        || polygonPoints === triangleData.rightFaceCoord;
      if (pointsCoincidence) {
        previousStackCopy.splice(reversedIndex, 1);
        addNewStackToHistory(previousStackCopy);
        break; // if another face below coincide, it has to be removed with another click
      }
    }
  };

  function changeFaceColor(face, color) {
    console.log(`Face: ${face}, color: ${color}`);
  }

  function triangleClickHandler(triangleData) {
    // activeFace set to null: inactivate any click event
    // onDialog not null: inactivate any click event
    if (activeFace === null || onDialog !== null) {
      return;
    }

    if (onErasing) {
      eraseClickedPolygon(triangleData);
    } else { // normal behaviour, i.e. not erasing
      const polygon = relatedFacePolygon(activeFace, triangleData, selectedColors);
      const newStack = addPolygonToPreviousStack(polygon);
      addNewStackToHistory(newStack);
    }

  }

  function buildAndSaveFile() {
    const displayedPolygonStack = stacksHistory[currentHistoryIndex()];
    buildAndSave(displayedPolygonStack, gridDimensionsInTriangles, selectedColors.background);
  }

  function toggleOnErasing() {
    setOnErasing(prevStateOnErasing => !prevStateOnErasing);
  }

  return (
    <div className="Editor">
      <Toolbar
        activeFace={activeFace}
        setActiveFace={setActiveFace}
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
        changeFaceColor={changeFaceColor}
        onErasing={onErasing}
        toggleOnErasing={toggleOnErasing}
        onDialog={onDialog}
        setOnDialog={setOnDialog}
        backwardInHistory={backwardInHistoryProp()}
        forwardInHistory={forwardInHistoryProp()}
        setGridDimensionsInTriangles={setGridDimensionsInTriangles}
        buildAndSaveFile={buildAndSaveFile}
      />
      <Frame
        gridDimensionsInTriangles={gridDimensionsInTriangles}
        backgroundColor={selectedColors.background}
        triangleClickHandler={triangleClickHandler}
        polygonStack={stacksHistory[currentHistoryIndex()]}
      />
    </div>
  );
}

export default Editor;
