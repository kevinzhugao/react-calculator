import React from 'react';

const Operations = ({ createExpression }) => {
  return (
    <div className="operations">
      <button className="square-btns" onClick={() => createExpression('*')}>x</button>
      <button className="square-btns" onClick={() => createExpression('/')}>/</button>
      <button className="square-btns" onClick={() => createExpression('+')}>+</button>
      <button className="square-btns" onClick={() => createExpression('-')}>-</button>
    </div>
  );
};

export default Operations;
