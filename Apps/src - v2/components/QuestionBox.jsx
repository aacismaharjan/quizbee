import React, { Component } from 'react';

class QuestionBox extends Component {
  state = {}
  render() {
    const { category, type, difficulty, question, correct_answer, incorrect_answers } = this.props.results

    let answers = incorrect_answers
    answers.push(correct_answer)

    return (
      <div className="box">
        <h3>{question}</h3>
        {answers.map(answer => {
          return <button>{answer}</button>
        })}
      </div>
    );
  }
}

export default QuestionBox;