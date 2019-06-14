import React from 'react';
import Router from './Router';
import { GlobalStyle } from '../utils/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
