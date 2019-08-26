import { ADD_FRAME } from '../actions/frames.actions';

export default function framesReducer(state = [], action) {
  switch (action.type) {
    case ADD_FRAME:
      return [...state, action.src];
    default:
      return state;
  }
}
