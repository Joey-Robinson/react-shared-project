import React, { Component } from 'react'
import { videos } from './data/videos'
import { listStyle, divGeneral } from './style'
import thumbnailSrc from './images/moon.jpg'

export default class ThumbnailList extends Component {
  render() {
    return (
      <div>
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
