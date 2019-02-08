import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Menu from './containers/Menu/Menu'
import ThumbnailList from './ThumbnailList'
import VideoPlayer from './VideoPlayer'
import { divGeneral } from './style'

class App extends Component {
  render() {
    return (
      <div className="App" style={divGeneral}>
        <Menu />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/thumbnails"
              render={props => <ThumbnailList />}
            />
            <Route exact path="/video" render={props => <VideoPlayer />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
