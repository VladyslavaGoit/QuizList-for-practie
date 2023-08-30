import { QuizForm } from './QuizForm/QuizForm';
import { SearchBar } from './SearchBar/SearchBar';
import items from '../data/quizItems.json';
import { QuizList } from './QuizList/QuizList';

export const App = () => {
  return (
    <>
      <QuizForm />
      <SearchBar />
      <QuizList items={items} />
    </>
  );
};
