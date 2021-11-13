import React from 'react';

const Display = ({ display }) => {
  return (
    <div className="display-container">
      <div className="display">{display || 0}</div>
    </div>
  );
};

export default Display;
