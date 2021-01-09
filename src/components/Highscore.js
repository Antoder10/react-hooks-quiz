import React from 'react';
import { ReactComponent as FirstPlace } from '../images/first-place.svg';
import { ReactComponent as SecondPlace } from '../images/second-place.svg';
import { ReactComponent as ThirdPlace } from '../images/third-place.svg';

const Highscore = ({highscore, index}) => {

  let podium;

  switch (index) {
    case 0:
      podium = 1;
      break;
    case 1:
      podium = 2;
      break;
    case 2:
      podium = 3;
      break;
  }

  return (
    <p>
      {podium === 1 && <FirstPlace className="highscore-badge" />}
      {podium === 2 && <SecondPlace className="highscore-badge" />}
      {podium === 3 && <ThirdPlace className="highscore-badge" />}
      {highscore}
    </p>
  )
}

export default Highscore;