import React, { Component } from 'react'
import { videos } from './data/videos'
import { listStyle, divGeneral } from './style'
import thumbnailSrc from './images/moon.jpg'
import Menu from './containers/Menu/Menu'

class App extends Component {
  render() {
    return (
      <div className="App" style={divGeneral}>
        <Menu />
        <ul style={listStyle}>
          {/* Todo: Add an identifier to the video array so the className isn't awkward */}
          {videos.map((video, index) => (
            <li className={video.name} key={index}>
              <img src={thumbnailSrc} alt="thumbnail" />
              {video.name}
              <div>{video.channelName}</div>
              <div>
                {video.views} views - {video.duration} hours ago
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
