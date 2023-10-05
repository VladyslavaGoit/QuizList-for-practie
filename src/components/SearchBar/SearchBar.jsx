import { LevelFilter } from 'components/LevelFilter/LevelFilter';
import { TopicFilter } from 'components/TopicFilter/TopicFilter';
import { useFilterParams } from 'hooks/useFilterParams';
import { Wrapper } from './SearchBar.styled';

export const SearchBar = () => {
  const { resetFilters } = useFilterParams();
  return (
    <Wrapper>
      <TopicFilter />
      <LevelFilter>
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </LevelFilter>
      <button onClick={() => resetFilters()}>Reset filters</button>
    </Wrapper>
  );
};
