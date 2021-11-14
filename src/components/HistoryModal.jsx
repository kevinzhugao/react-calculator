import React from 'react';
import ReactDOM from 'react-dom';
import HistoryList from './HistoryList.jsx';

const mockData = [
  {
    input: '3+3',
    output: '6',
  },
  {
    input: '3+4',
    output: '7',
  },
  {
    input: '4+4',
    output: '8',
  },
  {
    input: '3-3',
    output: '0',
  },
  {
    input: '1-1',
    output: '0',
  },
  {
    input: '-3-3',
    output: '-6',
  },
  {
    input: '|-3-3|',
    output: '6',
  },
  {
    input: '0+0',
    output: '0',
  },
  {
    input: '100',
    output: '100',
  },
]

const HistoryModal = ({ setShowHistory, showHistory }) => {
  if (!showHistory) return null;
  return ReactDOM.createPortal(
    <div className="history-modal-container" onClick={() => setShowHistory(false)}>
      <div className="history">
        <h1>History</h1>
        <HistoryList list={mockData}/>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default HistoryModal;
