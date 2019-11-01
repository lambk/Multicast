import React from 'react';
import { CloseButton, FrameContent, FrameHandle, FrameOuter } from '../styles/frame';

const CastFrame = ({ src, handleClose }) => {
  return (
    <FrameOuter>
      <FrameHandle data-drag-target>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
      </FrameHandle>
      <FrameContent
        title="test-title"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></FrameContent>
    </FrameOuter>
  );
};

export default CastFrame;
