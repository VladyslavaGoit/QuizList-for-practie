import { SearchBar } from '../components/SearchBar/SearchBar';
import { QuizList } from '../components/QuizList/QuizList';
import { useState, useEffect } from 'react';
import { deleteQuizById, fetchQuizzes } from 'API/fetchQuizzes';
import BeatLoader from 'react-spinners/BeatLoader';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const QuizzesPage = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [currentQuizId, setCurrentQuizId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const topic = searchParams.get('topic') ?? '';
  const level = searchParams.get('level') ?? 'all';

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
    <>
      <SearchBar />
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
    </>
  );
};

export default QuizzesPage;
