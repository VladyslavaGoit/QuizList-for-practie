import { QuizForm } from '../QuizForm/QuizForm';
import { SearchBar } from '../SearchBar/SearchBar';
import initialItems from '../../data/quizItems';
import { QuizList } from '../QuizList/QuizList';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from '../Layout';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

export const App = () => {
  const [quizItems, setQuizItems] = useState(initialItems);
  const [topic, setTopic] = useState(
    () => JSON.parse(localStorage.getItem('topic')) || ''
  );
  const [level, setLevel] = useState(
    () => JSON.parse(localStorage.getItem('level')) || 'all'
  );

  useEffect(() => {
    localStorage.setItem('topic', JSON.stringify(topic));
    localStorage.setItem('level', JSON.stringify(level));
  }, [topic, level]);

  const handleDeleteQuiz = quizId =>
    setQuizItems(quizItems.filter(({ id }) => id !== quizId));

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
        <QuizList items={visibleQuizItems} onDelete={handleDeleteQuiz} />
        <GlobalStyle />
      </Layout>
    </Container>
  );
};
