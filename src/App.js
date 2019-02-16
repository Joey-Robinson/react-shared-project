import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'
import { Router } from '@reach/router'
import Menu from './containers/Menu/Menu'
import ThumbnailList from './ThumbnailList'
import VideoPlayer from './VideoPlayer'
import { divGeneral } from './style'

let List = () => <ThumbnailList />
let VideoPlayers = () => <VideoPlayer />

class App extends Component {
  render() {
    return (
      <div className="App" style={divGeneral}>
        <Menu />
        <Router>
          <List path="ThumbNailList" />
          <VideoPlayers path="Video" />
        </Router>
      </div>
    )
  }
}

export default App
