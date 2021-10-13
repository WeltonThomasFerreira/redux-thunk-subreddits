import React from 'react';
import './App.css';
import Reddit from '../features/reddit/Reddit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reddit</h1>
        <Reddit />
      </header>
    </div>
  );
}

export default App;
