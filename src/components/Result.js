import React from 'react';

const Result = ({ score, playAgain }) => {
  let progressWidth = `${score * 100 / 5}%`
  let progressStyle = {
    width: progressWidth,
  }

  return (
    <div className="text-center p-3">
      <h4 className="mt-3">You scored {score} / 5 correct answer!</h4>
      <div className="progress my-3">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={progressStyle}></div>
      </div>
      <button className="btn btn-primary my-2" onClick={playAgain}>Play Again?</button>
    </div>
  );
}

export default Result;