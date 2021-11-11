import React from 'react';

const Numbers = ({ changeValue }) => {
  return (
    <>
      <button onClick={() => changeValue(7)}>7</button>
      <button onClick={() => changeValue(8)}>8</button>
      <button onClick={() => changeValue(9)}>9</button><br></br>
      <button onClick={() => changeValue(4)}>4</button>
      <button onClick={() => changeValue(5)}>5</button>
      <button onClick={() => changeValue(6)}>6</button><br></br>
      <button onClick={() => changeValue(1)}>1</button>
      <button onClick={() => changeValue(2)}>2</button>
      <button onClick={() => changeValue(3)}>3</button><br></br>
      <button onClick={() => changeValue(0)}>0</button>
      <button onClick={() => changeValue('.')}>.</button>
    </>
  );
};

export default Numbers;
