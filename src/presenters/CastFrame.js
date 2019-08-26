import React from 'react';
import '../styles/CastFrame.css';

const CastFrame = ({ src }) => {
  return (
    <div className="cast-frame">
      <iframe
        title="test-title"
        width="560"
        height="315"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CastFrame;
