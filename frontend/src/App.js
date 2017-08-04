import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DiagonalSplitTile from './components/pages/home/DiagonalSplitTile'

class App extends Component {
  render() {
    return (
      <DiagonalSplitTile>
        <div>
          <h1>TEST</h1>
          <h1>TEST</h1>
        </div>
        <div>
          <h1>TEST</h1>
          <h1>TEST</h1>
        </div>
      </DiagonalSplitTile>
    );
  }
}

export default App;
