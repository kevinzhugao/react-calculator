import React, { useState } from 'react';
import Display from './Display.jsx';
import TopRow from './TopRow.jsx';
import Numbers from './Numbers.jsx';
import Operations from './Operations.jsx';

const App = () => {
  let [value, setValue] = useState('');

  const pemdasHandler = (input) => setValue(value + input);

  const deleteHandler = () => setValue(value.substring(0, value.length - 1));

  const equalsHandler = () => {

  }

  return (
    <>
      <Display value={value} />
      <TopRow pemdasHandler={pemdasHandler} deleteHandler={deleteHandler}/>
      <Operations pemdasHandler={pemdasHandler}/>
      <Numbers pemdasHandler={pemdasHandler}/>
    </>
  );
};

export default App;
