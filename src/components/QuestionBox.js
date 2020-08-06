import React, { useState, useEffect } from 'react';

export const QuestionBox = (props) => {
  const [answers, setAnswers] = useState(props.options)

  useEffect(() => {
    setAnswers(props.options)
  }, [props.options])

  console.log(props.extra)

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title mb-2" dangerouslySetInnerHTML={{ __html: props.question }} />
        <div className="d-flex flex-wrap mb-1">
          <h6 className="m-0"><span className="badge badge-pill badge-secondary m-1">Category: {props.extra.category}</span></h6>
          <h6 className="m-0"><span className="badge badge-pill badge-secondary m-1">Type: {props.extra.type}</span></h6>
          <h6 className="m-0"><span className="badge badge-pill badge-secondary m-1">Difficulty: {props.extra.difficulty}</span></h6>
        </div>
        {answers.map((text, index) => (
          <button
            key={index}
            className={answers.length === 1 ? "btn btn-primary btn-sm m-1 disabled" : "btn btn-primary btn-sm m-1"}
            onClick={answers.length === 1 ? null : () => { setAnswers([text]); props.selected(text) }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
    </div >
  );
}
