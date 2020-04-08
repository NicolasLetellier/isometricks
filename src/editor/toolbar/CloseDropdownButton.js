
import React from 'react';

import close from './close.svg';
import './CloseDropdownButton.css';

function CloseDropdownButton({ onClick }) {
  return (
    <div
      className="close-dropdown-button-wrapper"
    >
      <button
        className="close-dropdown-button"
        type="button"
        onClick={() => onClick()}
      >
        <img src={close} className="close-icon" alt="close icon" />
      </button>
    </div>
  );
}

export default CloseDropdownButton;
