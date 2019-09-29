
import React from 'react';
import Toolbar from './Toolbar';
import Grid from './Grid';
import './Editor.css';

function Editor() {
  return (
    <div className="Editor">
      <Toolbar />
      <Grid />
    </div>
  );
}

export default Editor;
