import React, { memo } from 'react';
import useSelectorCounter from '../../selectors/useSelectorCounter';
import Header from '../Header';

function Scoreboard() {
  const [value, handleIncrement, handleDecrement] = useSelectorCounter();
  return (
    <div>
      <Header title="Scores" />
      <h3>{value}</h3>
      <div>
        <button className="btn btn-primary mr-3" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn btn-info" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default memo(Scoreboard);
