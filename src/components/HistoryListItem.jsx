import React from 'react';

const HistoryListItem = ({ item }) => {
  return (
    <div className="item-container">
      <div className="item">
        <span><strong>Input: </strong>{item.input}</span>
        <span><strong>Output: </strong>{item.output}</span>
      </div>
    </div>
  );
};

export default HistoryListItem;
