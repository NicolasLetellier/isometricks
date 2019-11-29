
import React from 'react';
import './Toolbar.css';

function Toolbar({ activeFace, setActiveFace, backwardInHistory, forwardInHistory }) {
  return (
    <div className="Toolbar">
      {/* <div className="left-buttons">
      </div> */}
      <div className="center-buttons">
        <button
          type="button"
          className={`left ${activeFace === 'left' && 'active'}`}
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
          className={`top ${activeFace === 'top' && 'active'}`}
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
          className={`right ${activeFace === 'right' && 'active'}`}
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
        <button
          type="button"
          className="backward"
          disabled={backwardInHistory === null}
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
          className="forward"
          disabled={forwardInHistory === null}
          onClick={forwardInHistory}
        >
          <svg
            viewBox="0 0 454.839 454.839"
          >
            <path
              d="M404.908,283.853c0,94.282-76.71,170.986-170.986,170.986h-60.526c-10.03,0-18.158-8.127-18.158-18.157v-6.053c0-10.031,8.127-18.158,18.158-18.158h60.526c70.917,0,128.618-57.701,128.618-128.618c0-70.917-57.701-128.618-128.618-128.618H122.255l76.905,76.905c8.26,8.257,8.26,21.699,0,29.956c-8.015,8.009-21.964,7.997-29.961,0L56.137,149.031c-4.001-4.001-6.206-9.321-6.206-14.981c0-5.656,2.205-10.979,6.206-14.978L169.205,6.002c7.997-8.003,21.958-8.003,29.956,0c8.26,8.255,8.26,21.699,0,29.953l-76.905,76.911h111.666C328.198,112.866,404.908,189.573,404.908,283.853z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
