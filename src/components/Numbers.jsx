import React from 'react';

const Numbers = ({ createExpression }) => {
  return (
    <div className="numbers">
      <button className="square-btns" onClick={() => createExpression(7)}>7</button>
      <button className="square-btns" onClick={() => createExpression(8)}>8</button>
      <button className="square-btns" onClick={() => createExpression(9)}>9</button><br></br>
      <button className="square-btns" onClick={() => createExpression(4)}>4</button>
      <button className="square-btns" onClick={() => createExpression(5)}>5</button>
      <button className="square-btns" onClick={() => createExpression(6)}>6</button><br></br>
      <button className="square-btns" onClick={() => createExpression(1)}>1</button>
      <button className="square-btns" onClick={() => createExpression(2)}>2</button>
      <button className="square-btns" onClick={() => createExpression(3)}>3</button><br></br>
      <button className="rtangle-btns" onClick={() => createExpression(0)}>0</button>
      <button className="square-btns" onClick={() => createExpression('.')}>.</button>
    </div>
  );
};

export default Numbers;
