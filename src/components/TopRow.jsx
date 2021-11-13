import React from 'react';

const TopRow = ({ clearHandler, createExpression, delHandler }) => {
  return (
    <>
      <button onClick={() => createExpression('(')}>(</button>
      <button onClick={() => createExpression(')')}>)</button>
      <button onClick={() => createExpression('^')}>^</button>
      <button onClick={clearHandler}>CLEAR</button>
      <button onClick={delHandler}>DEL</button>
    </>
  );
};

export default TopRow;
