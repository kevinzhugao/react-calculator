import React from 'react';

const TopRow = ({ createExpression, delHandler }) => {
  return (
    <div>
      <button className="square-btns" onClick={() => createExpression('(')}>(</button>
      <button className="square-btns" onClick={() => createExpression(')')}>)</button>
      <button className="square-btns" onClick={() => createExpression('^')}>^</button>
      <button className="square-btns" onClick={() => {}}>HIST</button>
      <button className="square-btns" onClick={delHandler}>DEL</button>
    </div>
  );
};

export default TopRow;
