import { useFilterParams } from 'hooks/useFilterParams';

export const LevelFilter = ({ children }) => {
  const { level, updateFilters } = useFilterParams();
  return (
    <select
      value={level}
      onChange={evt => updateFilters('level', evt.target.value)}
    >
      {children}
    </select>
  );
};
