
import React, { useState } from 'react';
import Toolbar from './Toolbar';
import Frame from './Frame';
import './Editor.css';

const fixedGridDimensions = {
  width: 12,
  height: 20
};

function Editor() {
  // set to null: inactivate the grid events
  const [activeFace, setActiveFace] = useState('left');
  const [gridDimensionsInCubes, setGridDimensionsInCube] = useState(fixedGridDimensions);

  return (
    <div className="Editor">
      <Toolbar setActiveFace={setActiveFace} />
      <Frame activeFace={activeFace} gridDimensionsInCubes={gridDimensionsInCubes} />
    </div>
  );
}

export default Editor;
