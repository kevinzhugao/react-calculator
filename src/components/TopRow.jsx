import React from 'react';

const TopRow = ({ pemdasHandler, deleteHandler }) => {
  return (
    <>
      <button onClick={() => pemdasHandler('(')}>(</button>
      <button onClick={() => pemdasHandler(')')}>)</button>
      <button onClick={() => pemdasHandler('^')}>^</button>
      <button onClick={deleteHandler}>DEL</button>
    </>
  );
};

export default TopRow;
