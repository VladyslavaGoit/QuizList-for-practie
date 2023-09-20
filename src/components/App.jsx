import { QuizForm } from './QuizForm/QuizForm';
import { SearchBar } from './SearchBar/SearchBar';
import initialItems from '../data/quizItems.json';
import { QuizList } from './QuizList/QuizList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const App = () => {
  const [quizItems, setQuizItems] = useState(initialItems);
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('all');

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

  const visibleQuizItems = filterQuizItems(topic, level);

  return (
    <>
      <Layout>
        <QuizForm onAdd={handleAddQuiz} />
        <SearchBar
          topic={topic}
          level={level}
          onChangeLevel={handleChangeLevel}
          onChangeTopic={handleChangeTopic}
        />
        <QuizList items={visibleQuizItems} onDelete={handleDeleteQuiz} />
        <GlobalStyle />
      </Layout>
    </>
  );
};
