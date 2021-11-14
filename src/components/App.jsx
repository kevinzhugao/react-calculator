import React, { useState } from 'react';
import Display from './Display.jsx';
import TopRow from './TopRow.jsx';
import Numbers from './Numbers.jsx';
import Operations from './Operations.jsx';
import HistoryModal from './HistoryModal.jsx';
import calculate from '../calculate.js';

const App = () => {
  let [display, setDisplay] = useState('');
  let [showHistory, setShowHistory] = useState(false);

  const createExpression = (input) => {
    if (input === '-') {
      if (display === '') {
        setDisplay(display + input);
      } else if (Number.isNaN(Number(display[display.length - 1])) && !Number.isNaN(Number(display[display.length - 2]))) {
        setDisplay(display + input);
      }
    } else if (input === '(') {
      setDisplay(display + input);
    } else if (typeof input === 'string') {
      if (display[display.length - 1] === ')') {
        setDisplay(display + input);
      } else if (display === '' || Number.isNaN(Number(display[display.length - 1]))) {
        return;
      }
    }
    setDisplay(display + input);
  };

  const clearHandler = () => setDisplay('');

  const delHandler = () => setDisplay(display.slice(0, display.length - 1));

  const absHandler = () => setDisplay(Math.abs(calculate(display)));

  const equalsHandler = () => setDisplay(calculate(display));

  return (
    <>
      <Display display={display} />
        <button className="clear" onClick={clearHandler}>CA</button>
        <TopRow createExpression={createExpression} delHandler={delHandler} setShowHistory={setShowHistory}/>
        <div>
          <Numbers createExpression={createExpression} />
          <Operations createExpression={createExpression} />
          <div className="abs-equals-container">
            <button className="square-btns abs" onClick={absHandler}>ABS</button><br></br>
            <button className="equals" onClick={equalsHandler}>=</button>
          </div>
        </div>
      <HistoryModal setShowHistory={setShowHistory} showHistory={showHistory} />
    </>
  );
};

export default App;
