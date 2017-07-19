import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeList from './EarthquakeList.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="title">
        <div className="my-header">
          <h2>Earthquakes!</h2>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
