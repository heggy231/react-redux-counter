import {
  INCREMENT,
  DECREMENT,
} from './actions';

export function counter(state, action) {
  switch (action.type) {
    case INCREMENT:
      // return OBJ with count prop that increment
      return {
        count: state.count + 1,
      }
    case DECREMENT:
      // return OBJ with count prop that decrement
      return {
        count: state.count - 1,
      }
  }
}