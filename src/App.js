
import React from 'react';
import Editor from './editor/Editor';
import logo from './isometricks_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Editor />
    </div>
  );
}

export default App;
