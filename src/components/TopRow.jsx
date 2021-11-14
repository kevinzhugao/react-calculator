import React from 'react';

const TopRow = ({ createExpression, delHandler, setShowHistory }) => {
  return (
    <div>
      <button className="square-btns" onClick={() => createExpression('(')}>(</button>
      <button className="square-btns" onClick={() => createExpression(')')}>)</button>
      <button className="square-btns" onClick={() => createExpression('^')}>^</button>
      <button className="square-btns" onClick={() => {setShowHistory(true)}}>HIST</button>
      <button className="square-btns" onClick={delHandler}>DEL</button>
    </div>
  );
};

export default TopRow;
