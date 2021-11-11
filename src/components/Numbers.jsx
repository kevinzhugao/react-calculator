import React from 'react';

const Numbers = ({ pemdasHandler }) => {
  return (
    <>
      <button onClick={() => pemdasHandler(7)}>7</button>
      <button onClick={() => pemdasHandler(8)}>8</button>
      <button onClick={() => pemdasHandler(9)}>9</button><br></br>
      <button onClick={() => pemdasHandler(4)}>4</button>
      <button onClick={() => pemdasHandler(5)}>5</button>
      <button onClick={() => pemdasHandler(6)}>6</button><br></br>
      <button onClick={() => pemdasHandler(1)}>1</button>
      <button onClick={() => pemdasHandler(2)}>2</button>
      <button onClick={() => pemdasHandler(3)}>3</button><br></br>
      <button onClick={() => pemdasHandler(0)}>0</button>
      <button onClick={() => pemdasHandler('.')}>.</button>
    </>
  );
};

export default Numbers;
