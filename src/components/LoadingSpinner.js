import React from 'react';

const LoadingSpinner = ({ message }) => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
      <div className="loading-message">{message || 'Loading...'}</div>
    </div>
  );
};

export default LoadingSpinner;
