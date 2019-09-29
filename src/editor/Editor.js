
import React, { useState } from 'react';
import Toolbar from './Toolbar';
import Grid from './Grid';
import './Editor.css';

function Editor() {
  // set to null: inactivate the grid
  const [activeFace, setActiveFace] = useState('left');

  return (
    <div className="Editor">
      <Toolbar setActiveFace={setActiveFace} />
      <Grid activeFace={activeFace} />
    </div>
  );
}

export default Editor;
