import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import CastFrame from './CastFrame';

const TransformableFrame = ({ frame, framesLength, onTransformStart, onTransformStop, onClose }) => {
  return (
    <Draggable
      handle=".frame-handle"
      cancel="button"
      bounds="parent"
      onStart={onTransformStart}
      onStop={onTransformStop}
      defaultPosition={{ x: framesLength * 20, y: framesLength * 20 }}
    >
      <section>
        <ResizableBox
          width={560}
          height={331}
          lockAspectRatio={true}
          onResizeStart={onTransformStart}
          onResizeStop={onTransformStop}
        >
          <CastFrame src={frame.src} handleClose={onClose} />
        </ResizableBox>
      </section>
    </Draggable>
  );
};

export default TransformableFrame;
