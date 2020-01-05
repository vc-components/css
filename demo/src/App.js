import React from 'react';
import logo from './logo.svg';
import './App.css';
import Part0 from './part/0';

const PPT0 = () => {
  return (
    <div>
      CSS LAYOUT
      <div style={{ fontSize: 30, color: '#61dafb' }}>
        <div>display</div>
        <div>width, height, padding, margin, border</div>
        <div>position</div>
        <div>...</div>
      </div>
    </div>
  );
};

const PPT1 = () => {
  return (
    <div>
      <p>1、位置</p>
      <p>2、大小</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <PPT0 />
        <PPT1 />
      </header> */}
      <Part0 />
    </div>
  );
}

export default App;
