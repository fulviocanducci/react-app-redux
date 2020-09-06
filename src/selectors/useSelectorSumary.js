import { useSelector } from 'react-redux';

function useSelectorSumary() {
  const value = useSelector((state) => state.counter.value);
  const values = useSelector((state) => state.todos.values);
  return [value, values];
}

export default useSelectorSumary;
