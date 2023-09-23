import { Button, Wrapper } from './QuizCard.styled';
import { HiArchiveBoxXMark } from 'react-icons/hi2';
import BeatLoader from 'react-spinners/BeatLoader';

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  currentId,
  isLoading,
  onDelete,
}) => {
  return (
    <Wrapper level={level}>
      <div>
        <h2>{topic}</h2>
        {isLoading && id === currentId ? (
          <p>Delete...</p>
        ) : (
          <div>
            <p>Level: {level}</p>
            <p>Time: {time}</p>
            <p>Questions: {questions}</p>
          </div>
        )}
        <Button onClick={() => onDelete(id)}>
          {isLoading && id === currentId ? (
            <BeatLoader size={7} color={'#ff4d00'} />
          ) : (
            <HiArchiveBoxXMark size={25} />
          )}
        </Button>
      </div>
    </Wrapper>
  );
};
