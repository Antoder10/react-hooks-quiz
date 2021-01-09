import React from 'react';

const WelcomeScreen = ({score}) => {
  return (
    <>
      <h1>Game ended</h1>
      <h4>Your score is {score}</h4>
    </>
  )
}

export default WelcomeScreen;