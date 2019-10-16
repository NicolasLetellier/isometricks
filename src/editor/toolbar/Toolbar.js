
import React from 'react';
import './Toolbar.css';

function Toolbar({ setActiveFace }) {
  return (
    <div className="Toolbar">
      <button type="button" className="Toolbar-top" onClick={() => setActiveFace('top')}>top</button>
      <button type="button" className="Toolbar-left" onClick={() => setActiveFace('left')}>left</button>
      <button type="button" className="Toolbar-right" onClick={() => setActiveFace('right')}>right</button>
    </div>
  );
}

export default Toolbar;
