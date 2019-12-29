const ADD_FRAME = 'frames/frameAdded';
const REMOVE_FRAME = 'frames/frameRemoved';

const initialState = {
  opened: [],
  lastClosed: null
};

export function addFrame(frame) {
  return {
    type: ADD_FRAME,
    frame
  };
}

export function removeFrame(frame) {
  return {
    type: REMOVE_FRAME,
    frame
  };
}

export default function framesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FRAME:
      return { ...state, opened: [...state.opened, action.frame] };
    case REMOVE_FRAME:
      const opened = state.opened.filter(frame => frame.uuid !== action.frame.uuid);
      return { ...state, opened, lastClosed: action.frame };
    default:
      return state;
  }
}
