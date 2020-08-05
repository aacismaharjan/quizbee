import React, { Component } from 'react';

class NavBar extends Component {
  state = {}
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">QuizBee</a>
        </div>
      </nav>
    );
  }
}

export default NavBar;