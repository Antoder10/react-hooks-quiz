import React, {useState, useEffect} from 'react';

import useQuestions from '../hooks/useQuestions';
import data from '../api/data';

import QuestionCard from './QuestionCard';
import WelcomeScreen from './WelcomeScreen';
import EndScreen from './EndScreen';
import Score from './Score';
import HighscoresList from './HighscoresList';
import Footer from './Footer';

const getLocalStorage = () => {
  let highscores = localStorage.getItem('highscores');
  if (highscores) {
    return (highscores = JSON.parse(localStorage.getItem('highscores')));
  } else {
    return [];
  }
};

const App = () => {
  const [questionsList, setQuestionsList] = useQuestions();

  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [hasGameEnded, setHasGameEnded] = useState(false);

  const [score, setScore] = useState(0);
  const [highscores, setHighscores] = useState(getLocalStorage());
  const [index, setIndex] = useState(0);

  const checkIndex = index => {
    if (index >= questionsList.length - 1) {
      setHasGameEnded(true);
      setHasGameStarted(false);
    }
    setIndex(index + 1);
  }

  useEffect(() => {
    const startNewGame = setTimeout(() => setHasGameStarted(true), 2000);
    return () => clearTimeout(startNewGame)
  }, [])

  useEffect(() => {
    if (hasGameEnded) {
      setHighscores([...highscores, score]);
    }
  }, [hasGameEnded])

  useEffect(() => {
    localStorage.setItem('highscores', JSON.stringify(highscores));
  }, [highscores]);

  return (
    <div className="container">
      {!hasGameStarted && !hasGameEnded && <WelcomeScreen />}
      {hasGameStarted && (
        <>
          <div className="row">
            <Score type={'score'} score={score}/>
            <Score type={'questionNumber'} index={index} totalQuestions={questionsList.length}/>
          </div>
          <div className="row">
            <QuestionCard
              index={index}
              checkIndex={checkIndex}
              questionsList={questionsList}
              setHasGameStarted={setHasGameStarted}
              setHasGameEnded={setHasGameEnded}
              score={score}
              setScore={setScore}
            />
            <HighscoresList highscores={highscores}/>
            <Footer />
          </div>
        </>
      )}
      {hasGameEnded && <EndScreen score={score} />}
    </div>
  );
}

export default App;
