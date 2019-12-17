
import React, { useState } from 'react';

import './GridSize.css';

function GridSize({ setGridDimensionsInTriangles }) {
  const [onEdit, setOnEdit] = useState(false);
  const [selectedDimensions, setSelectedDimensions] = useState(null);

  function applySelection() {
    if (selectedDimensions !== null) {
      setGridDimensionsInTriangles(selectedDimensions);
      setSelectedDimensions(null);
    }
    setOnEdit(false);
  }

  function closeDialog() {
    if (selectedDimensions !== null) {
      setSelectedDimensions(null);
    }
    setOnEdit(false);
  }

  function toogleDialog() {
    if (onEdit === false) {
      setOnEdit(true);
    } else {
      closeDialog();
    }
  }

  return (
    <>
      <button
        type="button"
        className={`grid-size toolbar-btn ${onEdit && 'active'}`}
        onClick={() => toogleDialog()}
      >
        <svg
          viewBox="0 0 42 47.75"
        >
          <path
            d="m 40,47.75 c 1.104,0 2,-0.896 2,-2 v -24 c 0,-0.53 -0.211,-1.039 -0.586,-1.414 l -8,-8 C 33.039,11.961 32.53,11.75 32,11.75 H 14 c -1.104,0 -2,0.896 -2,2 v 32 c 0,1.104 0.896,2 2,2 z m -3.829,-27 H 32 V 16.579 Z M 16,15.75 h 12 v 7 c 0,1.104 0.896,2 2,2 h 8 v 19 H 16 Z" />
          <path
            d="m 38,6 c 0,1.104 0.896,2 2,2 1.104,0 2,-0.896 2,-2 V 2 C 42,0.896 41.104,0 40,0 38.896,0 38,0.896 38,2 H 16 C 16,0.896 15.104,0 14,0 12.896,0 12,0.896 12,2 v 4 c 0,1.104 0.896,2 2,2 1.104,0 2,-0.896 2,-2"
          />
          <path
            d="m 0,45.75 c 0,1.104 0.896,2 2,2 h 4 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 v -28 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 H 2 c -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 v 28 c -1.104,0 -2,0.896 -2,2 z" />
        </svg>
      </button>
      {onEdit && (
        <div className="grid-size-wrapper">
          <div className="grid-size-dropdown">
            <p>
              Select a size for a new <strong>empty</strong> grid:
            </p>
            <div className="radio-component">
              <input
                id="mobile-size"
                type="radio"
                name="size"
                onClick={() => setSelectedDimensions({
                  width: 15,
                  height: 33
                })}
              />
              <label htmlFor="mobile-size">
                for mobile phone (15 x 33)
              </label>
            </div>
            <div className="radio-component">
              <input
                id="desktop-size"
                type="radio"
                name="size"
                onClick={() => setSelectedDimensions({
                  width: 45,
                  height: 35
                })}
              />
              <label htmlFor="desktop-size">
                for desktop (45 x 35)
              </label>
            </div>
            <button
              type="button"
              className="apply-grid-size dialog-btn"
              disabled={selectedDimensions === null}
              onClick={() => applySelection()}
            >
              Apply
            </button>
            <button
              type="button"
              className="close-grid-size dialog-btn"
              onClick={() => closeDialog()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default GridSize;
