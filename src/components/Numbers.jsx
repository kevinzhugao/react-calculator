import React from 'react';

const Numbers = ({ createExpression }) => {
  return (
    <>
      <button onClick={() => createExpression(7)}>7</button>
      <button onClick={() => createExpression(8)}>8</button>
      <button onClick={() => createExpression(9)}>9</button><br></br>
      <button onClick={() => createExpression(4)}>4</button>
      <button onClick={() => createExpression(5)}>5</button>
      <button onClick={() => createExpression(6)}>6</button><br></br>
      <button onClick={() => createExpression(1)}>1</button>
      <button onClick={() => createExpression(2)}>2</button>
      <button onClick={() => createExpression(3)}>3</button><br></br>
      <button onClick={() => createExpression(0)}>0</button>
      <button onClick={() => createExpression('.')}>.</button>
    </>
  );
};

export default Numbers;
