import React from 'react';
import Resume from '../Resume';
import Scoreboard from '../Scoreboard';
import Todos from '../Todos';

function App() {
  return (
    <div className="container">
      <Resume />
      <Scoreboard />
      <Todos />
    </div>
  );
}

export default App;
