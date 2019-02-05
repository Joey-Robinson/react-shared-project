import React, { Component } from 'react';
import './App.css';
import { videos } from './data/videos';

console.log(videos)
class App extends Component {
  render() {
    return (
      <div className="App">
          <ul>
            {/* Todo: Add an identifier to the video array so the className isn't awkward */}
          {videos.map((video, index) => (
            <li 
              className={video.title}
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
