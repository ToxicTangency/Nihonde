import MyInput from './UI/MyInput/MyInput';

export default function PostFilter({ filter, setFilter }) {
  return (
    <div className='filter'>
      <MyInput
        placeholder='Поиск...'
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
    </div>
  );
}
