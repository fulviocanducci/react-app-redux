import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from '../actions';

function useSelectorCounter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = useCallback(() => {
    dispatch({ type: counterAction.INCREMENT });
  }, [dispatch]);
  const handleDecrement = useCallback(() => {
    dispatch({ type: counterAction.DECREMENT });
  }, [dispatch]);
  return [value, handleIncrement, handleDecrement];
}

export default useSelectorCounter;
