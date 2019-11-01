import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

const defaultWidth = 560;
const defaultHeight = 331;
const aspectRatio = 560 / 331;
const minWidth = 271;
let maxWidth;

const Transformable = ({ offset, onTransformStart, onTransformStop, children }) => {
  maxWidth = window.innerWidth;
  return (
    <Draggable
      handle="[data-drag-target]"
      cancel="button"
      bounds="parent"
      onStart={onTransformStart}
      onStop={onTransformStop}
      defaultPosition={{ x: offset, y: offset }}
    >
      <section>
        <ResizableBox
          width={defaultWidth}
          height={defaultHeight}
          minConstraints={[minWidth, minWidth / aspectRatio]}
          maxConstraints={[maxWidth, maxWidth / aspectRatio]}
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
