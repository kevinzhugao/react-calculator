import React from 'react';
import ReactDOM from 'react-dom';
import HistoryList from './HistoryList.jsx';

const HistoryModal = ({ history, setShowHistory, showHistory }) => {
  if (!showHistory) return null;
  return ReactDOM.createPortal(
    <div className="history-modal-container" onClick={() => setShowHistory(false)}>
      <div className="history">
        <h1>History</h1>
        <HistoryList list={history}/>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default HistoryModal;
