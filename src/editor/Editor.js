
import React, { useState } from 'react';
import Toolbar from './Toolbar';
import Frame from './Frame';
import './Editor.css';

// to start before having grid size selector,
// here indicated in triangles
const FIXED_GRID_DIMENSIONS = {
  width: 25,
  height: 25
};

function Editor() {
  // set to null: inactivate the triangle events
  const [activeFace, setActiveFace] = useState('top');
  const [gridDimensionsInTriangles, setGridDimensionsInTriangles] = useState(FIXED_GRID_DIMENSIONS);

  return (
    <div className="Editor">
      <Toolbar setActiveFace={setActiveFace} />
      <Frame activeFace={activeFace} gridDimensionsInTriangles={gridDimensionsInTriangles} />
    </div>
  );
}

export default Editor;
