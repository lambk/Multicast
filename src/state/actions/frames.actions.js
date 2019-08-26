export const ADD_FRAME = 'ADD_FRAME';

export function addFrame(src) {
  return {
    type: ADD_FRAME,
    src
  };
}
