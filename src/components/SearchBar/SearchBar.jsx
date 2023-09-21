export const SearchBar = ({
  topic,
  level,
  onChangeTopic,
  onChangeLevel,
  onReset,
}) => {
  return (
    <div>
      <input
        value={topic}
        type="text"
        placeholder="Topic filter"
        onChange={evt => onChangeTopic(evt.target.value)}
      />
      <select value={level} onChange={evt => onChangeLevel(evt.target.value)}>
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <button onClick={onReset}>Reset filters</button>
    </div>
  );
};
