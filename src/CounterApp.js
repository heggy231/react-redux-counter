import React from 'react';
import Output from './containers/OutputContainer'; // importing the Smart Connected Output component instead of Dumb Component
// import Output from './components/Output';

const CounterApp = props => (
  <>
    <h1>Redux Counter APP!</h1>
    <Output />
  </>
);

export default CounterApp;