import React from 'react';
import HistoryListItem from './HistoryListItem.jsx'

const HistoryList = ({ list }) => {
  return (
    <div className="history-list">
      {list.map((item, i) => <HistoryListItem item={item} key={i} /> )}
    </div>
  );
};

export default HistoryList;
