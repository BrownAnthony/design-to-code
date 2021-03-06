import React, { Component } from 'react';
import './NavList.css';

class Navigation extends Component {
  render() {
    return(
      <ul className="NavList">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Expertise</a></li>
        <li><a href="/">Teams</a></li>
        <li><a href="/">Works</a></li>
        <li><a href="/">People Say</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    );
  }
}

export default Navigation;
