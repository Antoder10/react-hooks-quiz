import React from 'react';

import Highscore from './Highscore';

const HighscoresList = ({highscores}) => {
  return (
    <div className="col-4">
      <div className="card text-center">
        <h4 class="card-header">
          Highscores
        </h4>
        {highscores
          .sort((a, b) => b - a)
          .map((highscore, index) => <Highscore highscore={highscore} index={index}/>)}
      </div>
    </div>
  )
}

export default HighscoresList;