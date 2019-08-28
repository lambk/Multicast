import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

const Transformable = ({ offset, onTransformStart, onTransformStop, children }) => {
  return (
    <Draggable
      handle=".frame-handle"
      cancel="button"
      bounds="parent"
      onStart={onTransformStart}
      onStop={onTransformStop}
      defaultPosition={{ x: offset, y: offset }}
    >
      <section>
        <ResizableBox
          width={560}
          height={331}
          lockAspectRatio={true}
          onResizeStart={onTransformStart}
          onResizeStop={onTransformStop}
        >
          {children}
        </ResizableBox>
      </section>
    </Draggable>
  );
};

export default Transformable;
