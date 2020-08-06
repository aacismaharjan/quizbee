import React, { Component } from 'react';
import { fetchData } from '../api/QuestionBank'
import { QuestionBox } from './QuestionBox'
import Result from './Result'
import Loading from "./Loading"

class Container extends Component {
  state = {
    score: 0,
    responses: 0,
    questionBank: [],
    isLoading: true
  }

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = async () => {
    let questionBank = await fetchData()
    questionBank === undefined ? (questionBank = []) : (questionBank.map(question => (
      question.answers = this.shuffle([question.correct_answer, ...question.incorrect_answers])
    )))

    this.setState({ questionBank, isLoading: false })
  }

  playAgain = () => {
    this.setState({ questionBank: [] })
    this.getQuestions()
    this.setState({
      score: 0,
      responses: 0,
    })
  }

  computeAnswer(answer, correct) {
    if (answer === correct) {
      this.setState({ score: this.state.score + 1 })
    }
    this.setState({ responses: this.state.responses + 1 })
  }

  shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "3.5em" }}>
        <div className="row">
          <div className="col-md-7 mx-auto">
            {!this.state.questionBank.length ? <Loading /> : null}
            {this.state.questionBank.length > 0 &&
              this.state.responses < 5 &&
              this.state.questionBank.map(({ question, answers, correct_answer, ...extra }, index) => {
                return (
                  < QuestionBox
                    key={index}
                    question={question}
                    extra={extra}
                    options={answers}
                    selected={answer => this.computeAnswer(answer, correct_answer)}
                  />
                )
              })
            }
            {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Container;