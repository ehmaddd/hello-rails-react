import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <BrowserRouter>
      <Greeting />
    </BrowserRouter>
  );
}

export default App;
