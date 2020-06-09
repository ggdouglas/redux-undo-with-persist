import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch({ type: 'INCREMENT' });

  const handleDecrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <div className="app">
      <div className="count">{counter}</div>
      <button className="count-control" onClick={handleDecrement}>
        −
      </button>
      <button className="count-control" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default App;
