import axios from 'axios';

axios.defaults.baseURL = 'https://650c8f0747af3fd22f67c985.mockapi.io';

export const fetchQuizzes = async () => {
  const response = await axios.get('/quizzes');
  return response.data;
};

export const deleteQuizById = async quizId => {
  const response = await axios.delete(`/quizzes/${quizId}`);
  return response.data;
};

export const addQuiz = async newQuiz => {
  const response = await axios.post('/quizzes', newQuiz);
  return response.data;
};

export const fetchQuizById = async quizId => {
  const response = await axios.get(`/quizzes/${quizId}`);
  return response.data;
};
