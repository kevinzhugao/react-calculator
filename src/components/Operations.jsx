import React from 'react';

const Operations = ({ equalsHandler, createExpression }) => {
  return (
    <div>
      <button onClick={() => createExpression('*')}>x</button>
      <button onClick={() => createExpression('/')}>/</button>
      <button onClick={() => createExpression('+')}>+</button>
      <button onClick={() => createExpression('-')}>-</button>
      <button onClick={equalsHandler}>=</button>
    </div>
  );
};

export default Operations;
