import { Wrapper } from './QuizCard.styled';

export const QuizCard = ({ quiz: { topic, level, time, questions } }) => {
  return (
    <Wrapper level={level}>
      <h2>{topic}</h2>
      <div>
        <p>Level: {level}</p>
        <p>Time: {time}</p>
        <p>Questions: {questions}</p>
      </div>
    </Wrapper>
  );
};
