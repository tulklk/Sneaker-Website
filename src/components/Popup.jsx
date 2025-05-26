import React from 'react';

const Popup = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose} className="popup-close-button">Đóng</button>
      </div>
    </div>
  );
};

export default Popup; 