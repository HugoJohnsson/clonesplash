import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './routes';

import './static/css/main.css';

const App = () => {
  return (
    <BrowserRouter>
      <BaseRouter/>
    </BrowserRouter>
  )
}

export default App;
