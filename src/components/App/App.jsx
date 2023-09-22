import { QuizForm } from '../QuizForm/QuizForm';
import { SearchBar } from '../SearchBar/SearchBar';

import { QuizList } from '../QuizList/QuizList';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from '../Layout';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { deleteQuizById, fetchQuizzes } from 'API/fetchQuizzes';

export const App = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [topic, setTopic] = useState(
    () => JSON.parse(localStorage.getItem('topic')) || ''
  );
  const [level, setLevel] = useState(
    () => JSON.parse(localStorage.getItem('level')) || 'all'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuizId, setCurrentQuizId] = useState(null);

  useEffect(() => {
    localStorage.setItem('topic', JSON.stringify(topic));
    localStorage.setItem('level', JSON.stringify(level));
  }, [topic, level]);

  useEffect(() => {
    const getQuizzes = async () => {
      try {
        setIsLoading(true);
        const quizzes = await fetchQuizzes();
        setQuizItems(quizzes);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getQuizzes();
  }, []);

  const handleDeleteQuiz = async quizId => {
    try {
      setCurrentQuizId(quizId);
      setIsLoading(true);
      const deleteQuiz = await deleteQuizById(quizId);
      setQuizItems(quizItems.filter(({ id }) => id !== deleteQuiz.id));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddQuiz = newQuiz =>
    setQuizItems(prev => [...prev, { ...newQuiz, id: nanoid() }]);

  const handleChangeTopic = newTopic => setTopic(newTopic);

  const handleChangeLevel = newLevel => setLevel(newLevel);

  const filterQuizItems = (filterTopic, filterLevel) => {
    return quizItems.filter(({ topic, level }) => {
      if (filterLevel === 'all') {
        return topic.toLowerCase().includes(filterTopic.toLowerCase());
      }
      return (
        topic.toLowerCase().includes(filterTopic.toLowerCase()) &&
        level === filterLevel
      );
    });
  };

  const handleResetFilters = () => {
    setTopic('');
    setLevel('all');
  };

  const visibleQuizItems = filterQuizItems(topic, level);

  return (
    <Container>
      <Layout>
        <QuizForm onAdd={handleAddQuiz} />
        <SearchBar
          topic={topic}
          level={level}
          onChangeLevel={handleChangeLevel}
          onChangeTopic={handleChangeTopic}
          onReset={handleResetFilters}
        />
        {isLoading && <div>Loading...</div>}
        {visibleQuizItems.length > 0 && (
          <QuizList
            items={visibleQuizItems}
            isLoading={isLoading}
            currentId={currentQuizId}
            onDelete={handleDeleteQuiz}
          />
        )}
        <GlobalStyle />
      </Layout>
    </Container>
  );
};
