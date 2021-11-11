import React, { useState } from 'react';
import Display from './Display.jsx';
import TopRow from './TopRow.jsx';
import Numbers from './Numbers.jsx';
import Operations from './Operations.jsx';

const App = () => {
  let [value, setValue] = useState('');

  const changeValue = (input) => setValue(value + input);

  return (
    <>
      <Display value={value} />
      <TopRow />
      <Operations />
      <Numbers changeValue={changeValue}/>
    </>
  );
};

export default App;
