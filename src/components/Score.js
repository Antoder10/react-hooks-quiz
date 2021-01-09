import React from 'react';

const Score = ({type, score, index, totalQuestions}) => {
  return (
    <div className="col">
      <div className="card text-center">
        <h4 class="card-header">
          {type === 'score' ? 'Score' : 'Question n°'}
        </h4>
        <div className="card-body">
          {type === 'score' ? score : `${index + 1}/${totalQuestions}`}
        </div>
      </div>
    </div>
  )
}

export default Score;