export const ADD_FRAME = 'ADD_FRAME';
export const REMOVE_FRAME = 'REMOVE_FRAME';

export function addFrame(frame) {
  return {
    type: ADD_FRAME,
    frame
  };
}

export function removeFrame(uuid) {
  return {
    type: REMOVE_FRAME,
    uuid
  };
}
