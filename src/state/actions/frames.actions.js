export const ADD_FRAME = 'ADD_FRAME';
export const REMOVE_FRAME = 'REMOVE_FRAME';

export function addFrame(src) {
  return {
    type: ADD_FRAME,
    src
  };
}

export function removeFrame(index) {
  return {
    type: REMOVE_FRAME,
    index
  };
}
