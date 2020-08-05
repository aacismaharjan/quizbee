import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Container from "./components/Container"
import "./index.css"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container />
        <Footer />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
