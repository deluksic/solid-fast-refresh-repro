import { Component } from 'solid-js';

import { state, setState } from './store';
import Sub from './Sub';

const App: Component = () => {
  return (
    <div>
      {(setState((p) => p + 1), state())}
      <Sub />
    </div>
  );
};

export default App;
