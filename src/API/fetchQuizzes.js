import axios from 'axios';

axios.defaults.baseURL = 'https://650c8f0747af3fd22f67c985.mockapi.io';

export const fetchQuizzes = async () => {
  const response = await axios.get('/quizzes');
  return response.data;
};
