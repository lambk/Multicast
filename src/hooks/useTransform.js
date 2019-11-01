import { useState } from 'react';

function useTransform(initialState) {
  const [transforming, setTransforming] = useState(initialState);

  function onTransformStart() {
    setTransforming(true);
  }

  function onTransformStop() {
    setTransforming(false);
  }

  return [transforming, onTransformStart, onTransformStop];
}

export default useTransform;
