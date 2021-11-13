import React from 'react';

const TopRow = ({ clearHandler, createExpression }) => {
  return (
    <>
      <button onClick={() => createExpression('(')}>(</button>
      <button onClick={() => createExpression(')')}>)</button>
      <button onClick={() => createExpression('^')}>^</button>
      <button onClick={clearHandler}>CLEAR</button>
    </>
  );
};

export default TopRow;
