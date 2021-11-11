import React, { useState } from 'react';
import Display from './Display.jsx';
import Numbers from './Numbers.jsx';

const App = () => {
  let [value, setValue] = useState('');

  const changeValue = (input) => setValue(value + input);

  return (
    <>
      <Display value={value} />
      <Numbers changeValue={changeValue}/>
    </>
  );
};

export default App;