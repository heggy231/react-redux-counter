import { createStore } from 'redux';
import { counter } from './reducers';

// default state
const defaultState = {
  count: 42
};

// create store with 2 params: reducer, default state
export const store = createStore(counter, defaultState);