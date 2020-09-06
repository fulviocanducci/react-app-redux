import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosAction } from '../actions';

function useSelectorTodos() {
  const values = useSelector((state) => state.todos.values);
  const dispatch = useDispatch();
  const handleAdd = useCallback(
    (payload) => {
      dispatch({ type: todosAction.ADD, payload });
    },
    [dispatch]
  );
  const handleUpdate = useCallback(
    (payload) => {
      dispatch({ type: todosAction.UPDATE, payload });
    },
    [dispatch]
  );
  const handleDelete = useCallback(
    (payload) => {
      dispatch({ type: todosAction.DELETE, payload });
    },
    [dispatch]
  );
  return [values, handleAdd, handleUpdate, handleDelete];
}

export default useSelectorTodos;
