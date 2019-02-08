import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class VideoPlayer extends Component {
  render() {
    return (
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" playing />
    )
  }
}

export default VideoPlayer
