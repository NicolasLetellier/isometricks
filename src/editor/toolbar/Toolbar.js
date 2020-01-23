
import React from 'react';

import GridSize from './GridSize';
import Palette from './Palette';
import './Toolbar.css';

function Toolbar({
  activeFace,
  setActiveFace,
  selectedColors,
  setSelectedColors,
  onDialog,
  setOnDialog,
  backwardInHistory,
  forwardInHistory,
  setGridDimensionsInTriangles,
  buildAndSaveFile
}) {
  return (
    <div className="Toolbar">
      <div className="left-buttons">
        <GridSize
          onDialog={onDialog}
          setOnDialog={setOnDialog}
          setGridDimensionsInTriangles={setGridDimensionsInTriangles}
        />
        <button
          type="button"
          disabled={onDialog !== null}
          className="download toolbar-btn"
          onClick={() => buildAndSaveFile()}
        >
          <svg
            viewBox="0 0 30 36"
          >
            <path
              d="m 28,36 c 1.104,0 2,-0.896 2,-2 V 10 C 30,9.47 29.789,8.961 29.414,8.586 l -8,-8 C 21.039,0.211 20.53,0 20,0 H 2 C 0.896,0 0,0.896 0,2 v 32 c 0,1.104 0.896,2 2,2 z M 24.171,9 H 20 V 4.829 Z M 4,4 h 12 v 7 c 0,1.104 0.896,2 2,2 h 8 V 32 H 4 Z"
            />
            <path
              d="m 15,27.641506 -5.033641,-3.25 m 5.033641,3.25 5.033641,-3.25 M 15,16.95101 v 10.690496"
              style={{
                strokeWidth: '3.25',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }}
            />
          </svg>
        </button>
        <button
          type="button"
          className="backward toolbar-btn"
          disabled={backwardInHistory === null || onDialog !== null}
          onClick={backwardInHistory}
        >
          <svg
            viewBox="0 0 454.839 454.839"
          >
            <path
              d="M404.908,283.853c0,94.282-76.71,170.986-170.986,170.986h-60.526c-10.03,0-18.158-8.127-18.158-18.157v-6.053c0-10.031,8.127-18.158,18.158-18.158h60.526c70.917,0,128.618-57.701,128.618-128.618c0-70.917-57.701-128.618-128.618-128.618H122.255l76.905,76.905c8.26,8.257,8.26,21.699,0,29.956c-8.015,8.009-21.964,7.997-29.961,0L56.137,149.031c-4.001-4.001-6.206-9.321-6.206-14.981c0-5.656,2.205-10.979,6.206-14.978L169.205,6.002c7.997-8.003,21.958-8.003,29.956,0c8.26,8.255,8.26,21.699,0,29.953l-76.905,76.911h111.666C328.198,112.866,404.908,189.573,404.908,283.853z"
            />
          </svg>
        </button>
        <button
          type="button"
          className="forward toolbar-btn"
          disabled={forwardInHistory === null || onDialog !== null}
          onClick={forwardInHistory}
        >
          <svg
            viewBox="0 0 454.839 454.839"
          >
            <g
              transform="rotate(-180 227.41949462890625,227.45840454101562)"
            >
              <path
                d="m404.908004,170.994574c0,-94.332459 -76.709999,-171.07751 -170.985997,-171.07751l-60.525999,0c-10.03,0 -18.158,8.13135 -18.158,18.166717l0,6.05624c0,10.036369 8.127,18.167718 18.158,18.167718l60.525999,0c70.916999,0 128.617998,57.731881 128.617998,128.686835c0,70.954954 -57.700999,128.686835 -128.617998,128.686835l-111.666998,0l76.904999,-76.946159c8.26,-8.261419 8.26,-21.710613 0,-29.972032c-8.015,-8.013286 -21.964,-8.00128 -29.960999,0l-113.061998,113.125512c-4.001,4.003141 -6.206,9.325989 -6.206,14.989018c0,5.659027 2.205,10.984876 6.206,14.986016l113.067998,113.130514c7.997,8.007283 21.958,8.007283 29.955999,0c8.26,-8.259418 8.26,-21.710613 0,-29.969031l-76.904999,-76.952162l111.665998,0c94.275998,0 170.985997,-76.748053 170.985997,-171.078511z"
              />
            </g>
          </svg>
        </button>
      </div>
      <div className="center-buttons">
        <button
          type="button"
          disabled={onDialog !== null}
          className={`left toolbar-btn ${activeFace === 'left' && 'active'}`}
          onClick={() => setActiveFace('left')}
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
        <button
          type="button"
          disabled={onDialog !== null}
          className={`top toolbar-btn ${activeFace === 'top' && 'active'}`}
          onClick={() => setActiveFace('top')}
          >
          <svg
            viewBox="0 0 1.7321 1"
            >
            <polygon
              points="0.8660,0 1.7321,0.5 0.8660,1 0,0.5"
              >
            </polygon>
          </svg>
        </button>
        <button
          type="button"
          disabled={onDialog !== null}
          className={`right toolbar-btn ${activeFace === 'right' && 'active'}`}
          onClick={() => setActiveFace('right')}
          >
          <svg
            viewBox="0 0 0.8660 1.5"
            >
            <polygon
              points="0.8660,0 0.8660,1 0,1.5 0,0.5"
              >
            </polygon>
          </svg>
        </button>
      </div>
      <div className="right-buttons">
        <Palette
          onDialog={onDialog}
          setOnDialog={setOnDialog}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
        />
      </div>
    </div>
  );
}

export default Toolbar;
