import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Display from './Display.jsx';
import TopRow from './TopRow.jsx';
import Numbers from './Numbers.jsx';
import Operations from './Operations.jsx';
import HistoryModal from './HistoryModal.jsx';
import calculate from '../calculate.js';

const URL = 'http://ec2-54-67-88-11.us-west-1.compute.amazonaws.com/history';

const App = () => {
  let [display, setDisplay] = useState('');
  let [showHistory, setShowHistory] = useState(false);
  let history = useRef([]);

  useEffect(() => {
    axios.get(URL)
    .then(({ data }) => history.current = data.reverse())
    .catch((error) => console.log(error))
  }, []);

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

  const absHandler = () => {
    const result = Math.abs(calculate(display));
    setDisplay(result);
    axios.post(URL, {
      input: `|${display}|`,
      output: result
    })
    .then(() => {
      axios.get(URL)
        .then(({ data }) => history.current = data.reverse())
        .catch((error) => console.log(error))
    })
    .catch((error) => console.log(error))
  }

  const equalsHandler = () => {
    const result = calculate(display);
    setDisplay(result);
    axios.post(URL, {
      input: display,
      output: result[0]
    })
    .then(() => {
      axios.get(URL)
        .then(({ data }) => history.current = data.reverse())
        .catch((error) => console.log(error))
    })
    .catch((error) => console.log(error))
  }

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
      <HistoryModal history={history.current} setShowHistory={setShowHistory} showHistory={showHistory} />
    </>
  );
};

export default App;
