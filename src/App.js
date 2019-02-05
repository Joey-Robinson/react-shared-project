import React, { Component } from 'react';
// import './App.css';
import { videos } from './data/videos';
import {listStyle, divGeneral } from './style'

class App extends Component {
  render() {
    return (
      <div className="App" style={divGeneral}>
          <ul style={listStyle}>
            {/* Todo: Add an identifier to the video array so the className isn't awkward */}
          {videos.map((video, index) => (
            <li 
              className={video.name}
              key={index}
            >
              {video.name}
            </li>
          ))}
          </ul>
      </div>
    );
  }
}

export default App;
