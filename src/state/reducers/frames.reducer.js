import { ADD_FRAME, REMOVE_FRAME } from '../actions/frames.actions';

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
