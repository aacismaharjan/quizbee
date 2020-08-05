import React, { Component } from 'react';
import FetchData from "./api"
import QuestionBox from "./components/QuestionBox"
import "./App.css"

class App extends Component {
  state = {
    results: [],
  }

  async componentDidMount() {
    const fetchedData = await FetchData()
    this.setState({ results: fetchedData })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          {this.state.results.map((result, index) => {
            return <QuestionBox key={index} results={result} />
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default App;