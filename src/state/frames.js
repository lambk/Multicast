const ADD_FRAME = 'frames/frameAdded';
const REMOVE_FRAME = 'frames/frameRemoved';
const RECOVER_FRAME = 'frames/frameRecovered';

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

export function recoverFrame() {
  return { type: RECOVER_FRAME };
}

export default function framesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FRAME:
      return { ...state, opened: [...state.opened, action.frame] };
    case REMOVE_FRAME:
      const opened = state.opened.filter(frame => frame.uuid !== action.frame.uuid);
      return { ...state, opened, lastClosed: action.frame };
    case RECOVER_FRAME:
      if (!state.lastClosed) return state;
      return { ...state, opened: [...state.opened, state.lastClosed], lastClosed: null };
    default:
      return state;
  }
}
