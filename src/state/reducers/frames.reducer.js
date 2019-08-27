import { ADD_FRAME, REMOVE_FRAME } from '../actions/frames.actions';

export default function framesReducer(state = [], action) {
  switch (action.type) {
    case ADD_FRAME:
      return [...state, action.src];
    case REMOVE_FRAME:
      return state.filter((_el, index) => index !== action.index);
    default:
      return state;
  }
}
