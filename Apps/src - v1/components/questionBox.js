import React, { useState } from 'react';

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options)

  return (
    <div className="questionBox">
      <div className="question">
        <h3 className="list">{question}</h3>
        {answer.map((text, index) => {
          return <button key={index} className="btn btn-ans" onClick={() => { setAnswer([text]); selected(text) }} >{text}</button>
        })}
      </div>
    </div>
  )
}

export default QuestionBox