
import React from 'react';
import Grid from './Grid';
import { mapBuilder } from './gridUtils';
import './Frame.css';


function Frame({ gridDimensionsInCubes, activeFace }) {
  const map = mapBuilder(gridDimensionsInCubes.width, gridDimensionsInCubes.height);

  // we must find a way to not re-render Grid when activeFace change...
  return (
    <div className="Frame">
      <Grid map={map} activeface={activeFace} />
    </div>
  );
}

export default Frame;
