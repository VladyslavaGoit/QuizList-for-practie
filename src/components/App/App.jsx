import { QuizForm } from '../QuizForm/QuizForm';
import { SearchBar } from '../SearchBar/SearchBar';
import { QuizList } from '../QuizList/QuizList';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from '../Layout';
import { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { addQuiz, deleteQuizById, fetchQuizzes } from 'API/fetchQuizzes';
import BeatLoader from 'react-spinners/BeatLoader';
import { useMemo } from 'react';

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
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem('topic', JSON.stringify(topic));
    localStorage.setItem('level', JSON.stringify(level));
  }, [topic, level]);

  useEffect(() => {
    const getQuizzes = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const quizzes = await fetchQuizzes();
        setQuizItems(quizzes);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getQuizzes();
  }, []);

  const handleDeleteQuiz = async quizId => {
    try {
      setError(false);
      setCurrentQuizId(quizId);
      setIsLoading(true);
      const deleteQuiz = await deleteQuizById(quizId);
      setQuizItems(quizItems.filter(({ id }) => id !== deleteQuiz.id));
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddQuiz = async newQuiz => {
    try {
      setError(false);
      setIsLoading(true);
      const addedQuiz = await addQuiz(newQuiz);
      setQuizItems(prev => [...prev, addedQuiz]);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeTopic = newTopic => setTopic(newTopic);

  const handleChangeLevel = newLevel => setLevel(newLevel);

  const handleResetFilters = () => {
    setTopic('');
    setLevel('all');
  };

  const visibleQuizItems = useMemo(() => {
    return quizItems.filter(quiz => {
      const hasSameTopic = quiz.topic
        .toLowerCase()
        .includes(topic.toLowerCase());
      if (level === 'all') {
        return hasSameTopic;
      }
      return hasSameTopic && quiz.level === level;
    });
  }, [quizItems, topic, level]);

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
        {isLoading && !quizItems.length && (
          <BeatLoader
            size={15}
            color={'#ff4d00'}
            cssOverride={{ margin: '0 auto' }}
          />
        )}
        {error && !isLoading && (
          <div>
            Oops, something went wrong. Please reload the page to try again
          </div>
        )}
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
