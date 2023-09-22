import { QuizCard } from 'components/QuizCard/QuizCard';
import { List, ListItem } from './QuizList.styled';

export const QuizList = ({ items, currentId, isLoading, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <QuizCard
            key={item.id}
            quiz={item}
            isLoading={isLoading}
            currentId={currentId}
            onDelete={onDelete}
          />
        </ListItem>
      ))}
    </List>
  );
};
