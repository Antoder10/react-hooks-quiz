import { useState, useEffect } from 'react';

import OpenTriviaDB from '../api/OpenTriviaDB';

const useQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect( () => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const response = await OpenTriviaDB.get('');

    setQuestions(response.data.results);
  };

  return [questions, fetchQuestions];
}

export default useQuestions;