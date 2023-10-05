import { fetchQuizById } from 'API/fetchQuizzes';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

const QuizDetailsPage = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const fetchedQuiz = await fetchQuizById(quizId);
        setQuiz(fetchedQuiz);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuiz();
  }, [quizId]);

  return (
    <div>
      <Link to={location?.state?.from ?? '/quizzes'}>Back to quizzes</Link>
      {isLoading && <BeatLoader />}
      {quiz && <h3>{quiz.topic}</h3>}
      {error && (
        <div>
          Oops, something went wrong. Please reload the page to try again
        </div>
      )}
    </div>
  );
};

export default QuizDetailsPage;
