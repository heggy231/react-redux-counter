import React from 'react';
import './App.css';
import CounterApp from './CounterApp';

// wrap the entire app with `Provider` Component from `react-redux`.  main job for `Provider` is search Smart Container and connect it to Redux store.
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <CounterApp />
      </div>
    </Provider>
  );
}

export default App;
