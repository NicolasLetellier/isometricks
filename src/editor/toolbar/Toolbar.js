
import React from 'react';
import './Toolbar.css';

function Toolbar({ setActiveFace, backwardInHistory, forwardInHistory }) {
  return (
    <div className="Toolbar">
      <button type="button" className="Toolbar-top" onClick={() => setActiveFace('top')}>top</button>
      <button type="button" className="Toolbar-left" onClick={() => setActiveFace('left')}>left</button>
      <button type="button" className="Toolbar-right" onClick={() => setActiveFace('right')}>right</button>
      {backwardInHistory !== null && (
        <button type="button" className="Toolbar-backward" onClick={backwardInHistory}>backward</button>
      )}
      {forwardInHistory !== null && (
        <button type="button" className="Toolbar-forward" onClick={forwardInHistory}>forward</button>
      )}
    </div>
  );
}

export default Toolbar;
