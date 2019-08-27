import React from 'react';
import '../styles/CastFrame.css';

const CastFrame = ({ src, handleClose }) => {
  return (
    <div className="cast-frame">
      <div className="frame-handle">
        <button type="button" onClick={handleClose}>
          &times;
        </button>
      </div>
      <iframe
        title="test-title"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CastFrame;
