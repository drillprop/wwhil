import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

const app = document.getElementById('app');
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  app
);
