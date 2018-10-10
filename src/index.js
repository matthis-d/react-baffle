import React from 'react';
import ReactDOM from 'react-dom';

import BaffleText from './BaffleText';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <BaffleText text="Hello world" duration={1000000} delay={1000} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
