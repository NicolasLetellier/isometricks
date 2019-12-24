
import React, { useState } from 'react';
import Editor from './editor/Editor';
import Info from './info/Info';
import logo from './isometricks_logo.svg';
import infoBtn from './info_btn.svg'
import './App.css';

function App() {
  const [infoDisplayed, setInfoDisplayed] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          type="button"
          className="info-btn"
          onClick={() => setInfoDisplayed(!infoDisplayed)}
        >
          {!infoDisplayed && (
            <img src={infoBtn} className="info-btn" alt="info" />
          )}
          {infoDisplayed && (
            'back to editor'
          )}
        </button>
      </header>
      {!infoDisplayed && (
        <Editor />
      )}
      {infoDisplayed && (
        <Info />
      )}
    </div>
  );
}

export default App;
