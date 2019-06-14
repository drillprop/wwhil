import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Quote from './Quote';
import Title from './Title';
import Text from './Text';

const Router = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Quote} />
      <Route path='/title/' component={Title} />
      <Route path='/text/' component={Text} />
    </BrowserRouter>
  );
};

export default Router;
