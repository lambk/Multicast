const ADD_FRAME = 'frames/frameAdded';
const REMOVE_FRAME = 'frames/frameRemoved';

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

export default function framesReducer(state = [], action) {
  switch (action.type) {
    case ADD_FRAME:
      return [...state, action.frame];
    case REMOVE_FRAME:
      return state.filter(frame => frame.uuid !== action.uuid);
    default:
      return state;
  }
}
