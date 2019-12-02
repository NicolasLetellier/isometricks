
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
    </div>
  );
}

export default Toolbar;
