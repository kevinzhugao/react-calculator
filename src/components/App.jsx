import React, { useState } from 'react';
import Display from './Display.jsx';
import TopRow from './TopRow.jsx';
import Numbers from './Numbers.jsx';
import Operations from './Operations.jsx';
import calculate from '../calculate.js';

const App = () => {
  let [display, setDisplay] = useState('');

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

  const equalsHandler = () => setDisplay(calculate(display));

  return (
    <>
      <Display display={display} />
        <button className="clear" onClick={clearHandler}>CA</button>
        <TopRow createExpression={createExpression} delHandler={delHandler} />
        <div>
          <Numbers createExpression={createExpression} />
          <Operations createExpression={createExpression} />
          <button className="equal" onClick={equalsHandler}>=</button>
        </div>
    </>
  );
};

export default App;
