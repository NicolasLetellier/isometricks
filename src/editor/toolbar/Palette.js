
import React, { useState } from 'react';

import CloseDropdownButton from './CloseDropdownButton';

import { cssColorSyntaxValidator } from '../colorUtils';

import './Palette.css';

function Palette({
  onDialog,
  setOnDialog,
  selectedColors,
  setSelectedColors
}) {
  const [colorInput, setColorInput] = useState('');
  // initialize colorHistory array with default start colors
  const [colorHistory, setColorHistory] = useState([
    selectedColors.background,
    selectedColors.right,
    selectedColors.top,
    selectedColors.left
  ]);
  const [colorSyntaxErrorMessage, setColorSyntaxErrorMessage] = useState(null);

  function closeDialog() {
    setOnDialog(null);
    setColorInput('');
    setColorSyntaxErrorMessage(null);
  }

  function toogleDialog() {
    if (onDialog === null) {
      setOnDialog('palette');
    } else if (onDialog === 'palette') {
      closeDialog();
    }
  }

  function changeInput(color) {
    // if there is an error message displayed from a previous
    // submission, remove it:
    setColorSyntaxErrorMessage(null);

    setColorInput(color);
  }

  function applyColor(color, colorTarget) {
    if (color !== '') {
      const trimmedColor = color.trim();

      if (!cssColorSyntaxValidator(trimmedColor)) {
        setColorSyntaxErrorMessage('incorrect color syntax');

      } else {
        // colorTarget can only be one of the selectedColors keys:
        // left, top, right or background
        setSelectedColors((previousColors) => {
          const copiedColors = Object.assign({}, previousColors);
          copiedColors[colorTarget] = color;
          return copiedColors;
        })

        addToColorHistory(color);
        changeInput('');
      }
    }
  }

  function addToColorHistory(color) {
    setColorHistory((previousHistory) => {
      const copiedHistory = previousHistory.slice();
      const alreadyUsedColorIndex = copiedHistory.findIndex(
        (historicColor) => (color === historicColor)
      );
      if (alreadyUsedColorIndex !== -1) {
        // remove color repeatedly used from the history array
        copiedHistory.splice(alreadyUsedColorIndex, 1);
      }
      copiedHistory.push(color);
      return copiedHistory;
    });
  }

  function colorHistoryListItems() {
    const copiedHistory = colorHistory.slice();
    return copiedHistory.reverse().map((color) => (
      <li
        key={color}
      >
        <div
          onClick={() => changeInput(color)}
          className="color-sample"
          style={{
            backgroundColor: color
          }}
        >
        </div>
        {color}
      </li>
    ));
  }

  return (
    <>
      <button
        type="button"
        disabled={onDialog !== null && onDialog !== 'palette'}
        className={`palette toolbar-btn ${onDialog === 'palette' && 'active'}`}
        onClick={() => toogleDialog()}
      >
        <svg
          width="639.59314pt"
          viewBox="-21 -21 640.21837 635.85004"
          height="635.85004pt">
          <path
            id="path2"
            d="m 243.63859,-16.405955 c 84.14811,-14.809817 169.02669,4.021664 239.01372,53.027116 69.99088,49.004763 116.71925,122.328819 131.5784,206.464269 14.75536,83.54686 -3.48092,167.84218 -51.349,237.35101 -47.87306,69.52557 -120.12783,116.60831 -203.43726,132.57523 -1.16293,0.2209 -2.32922,0.44249 -3.49415,0.65186 l -0.36534,0.0644 c -26.58981,4.6885 -53.73151,-2.43334 -74.52273,-19.56769 -21.1401,-17.42583 -33.4858,-43.24126 -33.87003,-70.83991 -0.0894,-6.58054 -0.80441,-13.22463 -2.12184,-19.75126 -5.37842,-26.67839 -20.75015,-50.05552 -43.28121,-65.83195 -22.52722,-15.77711 -49.75951,-22.22403 -76.66535,-18.15808 -6.58362,0.99428 -13.0723,2.59341 -19.29041,4.76078 -26.054135,9.0762 -54.54544,6.31369 -78.15071,-7.59152 -23.3154099,-13.7461 -39.32809,-36.96215 -43.93851,-63.71646 -0.20024,-1.15861 -0.39117,-2.3313 -0.57998,-3.49192 C -30.32534,265.79365 -10.79435,181.79458 38.16476,113.02947 87.093315,44.293557 160.02169,-1.6620389 243.54184,-16.388896 Z"
          />
          <path
            id="path899"
            d="M 532.79158,281.65801 A 79.588722,79.588722 0 0 1 430.7817,329.226 79.588722,79.588722 0 0 1 383.21371,227.21611 79.588722,79.588722 0 0 1 485.2236,179.64813 79.588722,79.588722 0 0 1 532.79158,281.65801 Z"
            style={{
              fill: selectedColors.right,
            }}
          />
          <path
            id="path897"
            d="M 215.00468,281.65826 A 79.588722,79.588722 0 0 1 112.9948,329.22625 79.588722,79.588722 0 0 1 65.426808,227.21637 79.588722,79.588722 0 0 1 167.43669,179.64839 79.588722,79.588722 0 0 1 215.00468,281.65826 Z"
            style={{
              fill: selectedColors.left,
            }}
          />
          <path
            id="path829-0-6"
            d="M 373.66048,123.6484 A 79.588715,79.588715 0 0 1 271.65061,171.21638 79.588715,79.588715 0 0 1 224.08263,69.206513 79.588715,79.588715 0 0 1 326.09249,21.638527 79.588715,79.588715 0 0 1 373.66048,123.6484 Z"
            style={{
              fill: selectedColors.top,
            }}
          />
        </svg>
      </button>
      {onDialog === 'palette' && (
        <div className="palette-wrapper">
          <div className="palette-dropdown">
            <CloseDropdownButton
              onClick={closeDialog}
            />
            <label>
              Introduce any&nbsp;
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"
                target="_blank"
                rel="noreferrer noopener"
              >
                CSS color
              </a>
              , or rescue one from history:</label>
            <input
              value={colorInput}
              onChange={(event) => changeInput(event.target.value)}
            >
            </input>
            {colorSyntaxErrorMessage && (
              <p
                className="color-syntax-error-message"
              >
                {colorSyntaxErrorMessage}
              </p>
            )}
            <p>And apply it to:</p>
            <div
              className="color-targets"
              style={{
                backgroundColor: selectedColors.background
              }}
            >
              <div
                className="faces-wrapper"
              >
                <button
                  type="button"
                  disabled={colorInput === ''}
                >
                  <svg
                    viewBox="0 0 0.8660 1.5"
                  >
                    <polygon
                      onClick={() => applyColor(colorInput, 'left')}
                      points="0,0 0.8660,0.5 0.8660,1.5 0,1"
                      style={{
                        fill: selectedColors.left,
                      }}
                    >
                    </polygon>
                  </svg>
                  {selectedColors.left}
                </button>
                <button
                  type="button"
                  disabled={colorInput === ''}
                >
                  <svg
                    viewBox="0 0 1.7321 1"
                  >
                    <polygon
                      onClick={() => applyColor(colorInput, 'top')}
                      points="0.8660,0 1.7321,0.5 0.8660,1 0,0.5"
                      style={{
                        fill: selectedColors.top,
                      }}
                    >
                    </polygon>
                  </svg>
                  {selectedColors.top}
                </button>
                <button
                  type="button"
                  disabled={colorInput === ''}
                >
                  <svg
                    viewBox="0 0 0.8660 1.5"
                  >
                    <polygon
                      onClick={() => applyColor(colorInput, 'right')}
                      points="0.8660,0 0.8660,1 0,1.5 0,0.5"
                      style={{
                        fill: selectedColors.right,
                      }}
                    >
                    </polygon>
                  </svg>
                  {selectedColors.right}
                </button>
              </div>
              <button
                className="background-target"
                type="button"
                disabled={colorInput === ''}
                onClick={() => applyColor(colorInput, 'background')}
              >
                {`background: ${selectedColors.background}`}
              </button>
            </div>
            <div
              className="color-list"
            >
              <p>
                Palette history
              </p>
              <ul>
                {colorHistoryListItems()}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Palette;
