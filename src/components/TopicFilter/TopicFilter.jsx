import { useFilterParams } from 'hooks/useFilterParams';

export const TopicFilter = () => {
  const { topic, updateFilters } = useFilterParams();
  return (
    <input
      value={topic}
      type="text"
      placeholder="Topic filter"
      onChange={evt => updateFilters('topic', evt.target.value)}
    />
  );
};
