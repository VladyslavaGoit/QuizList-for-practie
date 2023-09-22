import { Button, Wrapper } from './QuizCard.styled';
import { HiArchiveBoxXMark } from 'react-icons/hi2';

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  currentId,
  isLoading,
  onDelete,
}) => {
  return (
    <Wrapper level={level}>
      <div>
        {isLoading && id === currentId ? (
          <div>Delete...</div>
        ) : (
          <>
            <h2>{topic}</h2>
            <div>
              <p>Level: {level}</p>
              <p>Time: {time}</p>
              <p>Questions: {questions}</p>
            </div>
          </>
        )}
        <Button onClick={() => onDelete(id)}>
          <HiArchiveBoxXMark size={25} />
        </Button>
      </div>
    </Wrapper>
  );
};
