import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './menu.css'

class Sidebar extends Component {
  render() {
    return (
      <Menu>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </Menu>
    )
  }
}

export default Sidebar