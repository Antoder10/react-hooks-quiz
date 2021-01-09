import React from 'react';

const AnswerBtn = ({answer, correct_answer, checkIndex, index, score, setScore}) => {
  const onAnswerSubmit = () => {
    if(answer === correct_answer) setScore(score + 1);
    checkIndex(index);
  }

  return (
    <button
      className="btn btn-primary btn-block"
      type="button"
      onClick={onAnswerSubmit}
      dangerouslySetInnerHTML={{__html: answer}}
    />
  )
}

export default AnswerBtn;