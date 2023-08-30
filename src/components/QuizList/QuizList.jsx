import { QuizCard } from 'components/QuizCard/QuizCard';
import { List } from './QuizList.styled';

export const QuizList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <QuizCard key={item.id} quiz={item} />
      ))}
    </List>
  );
};
