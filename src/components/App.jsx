import CreateQuizPage from 'pages/CreateQuizPage';
import QuizDetailsPage from 'pages/QuizDetailsPage';
import QuizzesPage from 'pages/QuizzesPage';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>Home page</div>} />
          <Route path="quizzes" element={<QuizzesPage />} />
          <Route path="create" element={<CreateQuizPage />} />
          <Route path="quizzes/:quizId" element={<QuizDetailsPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
