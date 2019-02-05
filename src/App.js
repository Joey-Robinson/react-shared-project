import React, { Component } from 'react';
// import './App.css';
import { videos } from './data/videos';

const listStyle = {
  color: 'white',
  backgroundColor: 'inherit',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(5rem, 10rem))',
  listStyle: 'none'
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <ul style={listStyle}>
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
