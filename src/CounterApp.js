import React from 'react';
import Output from './containers/OutputContainer'; // importing the Smart Connected Output component instead of Dumb Component
// import Output from './components/Output';
import Increment from './containers/IncrementContainer';
import Decrement from './containers/DecrementContainer';


const CounterApp = props => (
  <>
    <h1>Redux Counter APP!</h1>
    <Output />
    <Increment />
    <Decrement />
  </>
);

export default CounterApp;