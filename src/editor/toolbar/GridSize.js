
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

  return (
    <div className="grid-size-wrapper">
      <button
        type="button"
        className={`grid-size-button toolbar-btn ${onEdit && 'active'}`}
        onClick={() => setOnEdit(!onEdit)}
      >
        <svg
          viewBox="0 0 0.8660 1.5"
        >
          <polygon
            points="0,0 0.8660,0.5 0.8660,1.5 0,1"
          >
          </polygon>
        </svg>
      </button>
      {onEdit && (
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
      )}
    </div>
  );
}

export default GridSize;
