import React from 'react';

const Operations = ({ pemdasHandler }) => {
  return (
    <div>
      <button onClick={() => pemdasHandler('x')}>x</button>
      <button onClick={() => pemdasHandler('/')}>/</button>
      <button onClick={() => pemdasHandler('+')}>+</button>
      <button onClick={() => pemdasHandler('-')}>-</button>
      <button>=</button>
    </div>
  );
};

export default Operations;
