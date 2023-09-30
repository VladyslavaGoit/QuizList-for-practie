import { addQuiz } from 'API/fetchQuizzes';
import { QuizForm } from 'components/QuizForm/QuizForm';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';

const CreateQuizPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleAddQuiz = async newQuiz => {
    try {
      setError(false);
      setIsLoading(true);
      await addQuiz(newQuiz);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <QuizForm onAdd={handleAddQuiz} />
      {isLoading && <BeatLoader />}
      {error && <div>Something went wrong, please try again later</div>}
    </>
  );
};

export default CreateQuizPage;
