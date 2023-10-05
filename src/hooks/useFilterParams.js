import { useSearchParams } from 'react-router-dom';

export const useFilterParams = () => {
  const [filterParams, setFilterParams] = useSearchParams();
  const topic = filterParams.get('topic') ?? '';
  const level = filterParams.get('level') ?? 'all';

  const updateFilters = (name, value) => {
    filterParams.set(String(name), String(value));
    setFilterParams(filterParams);
  };

  const resetFilters = () => setFilterParams({ topic: '', level: 'all' });

  return {
    topic,
    level,
    updateFilters,
    resetFilters,
  };
};
