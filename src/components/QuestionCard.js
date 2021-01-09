import React, {useState} from 'react';

import AnswerBtn from './AnswerBtn';

const QuestionCard = ({index, checkIndex, questionsList, setHasGameStarted, setHasGameEnded, score, setScore}) => {
  const {question, correct_answer, incorrect_answers} = questionsList[index];

  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

  return (
    <div className="col-8">
      <div className="card">
        <div class="card-body">
          <h3 className="text-center" dangerouslySetInnerHTML={{__html:question}} />
          <div className="d-grid gap-2 col-6 mx-auto">
            {shuffledAnswers.map(answer => {
              return (
                <AnswerBtn
                  answer={answer}
                  correct_answer={correct_answer}
                  checkIndex={checkIndex}
                  index={index}
                  score={score}
                  setScore={setScore}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard;