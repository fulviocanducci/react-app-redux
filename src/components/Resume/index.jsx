import React from 'react';
import useSelectorSumary from '../../selectors/useSelectorSumary';
import Header from '../Header';

const Resume = () => {
  const [value, values] = useSelectorSumary();
  return (
    <div>
      <Header title="Sumary" />
      <div>Count: {value}</div>
      <div>Todos: {values.length}</div>
    </div>
  );
};

export default Resume;
