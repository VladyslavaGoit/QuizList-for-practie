import { useSearchParams } from 'react-router-dom';
import { Wrapper } from './SearchBar.styled';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get('topic') ?? '';
  const level = searchParams.get('level') ?? 'all';
  console.log(topic, level);

  const updateSearchParams = (name, value) => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };
  return (
    <Wrapper>
      <input
        value={topic}
        type="text"
        placeholder="Topic filter"
        onChange={evt => updateSearchParams('topic', evt.target.value)}
      />
      <select
        value={level}
        onChange={evt => updateSearchParams('level', evt.target.value)}
      >
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <button onClick={() => setSearchParams({ topic: '', level: 'all' })}>
        Reset filters
      </button>
    </Wrapper>
  );
};
