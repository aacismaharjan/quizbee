import React, { Component } from 'react';

const Result = ({ score, playAgain }) => {
  return (
    <div className="score-board">
      <div className="score">
        You scored {score} / 5 correct answers!
      </div>

      <button className="btn btn-play" onClick={playAgain}>Play Again!</button>
    </div>
  );
}

export default Result;  