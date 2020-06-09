import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import './App.css';

function App() {
  const counter = useSelector((state) => state.counter.present);
  const canUndo = useSelector((state) => state.counter.past.length > 0);
  const canRedo = useSelector((state) => state.counter.future.length > 0);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch({ type: 'INCREMENT' });

  const handleDecrement = () => dispatch({ type: 'DECREMENT' });

  const handleUndo = () => dispatch(UndoActionCreators.undo());

  const handleRedo = () => dispatch(UndoActionCreators.redo());

  return (
    <div className="app">
      <div className="count">{counter}</div>
      <div>
        <button className="count-control" onClick={handleDecrement}>
          −
        </button>
        <button className="count-control" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div>
        <button disabled={!canUndo} onClick={handleUndo}>
          Undo
        </button>
        <button disabled={!canRedo} onClick={handleRedo}>
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;
