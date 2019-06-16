import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import Quote from './Quote';
import Title from './Title';
import Text from './Text';

const Router = () => {
  const context = useContext(__RouterContext);
  console.log(context);
  return (
    <Switch>
      <Route path='/' exact component={Quote} />
      <Route path='/title/' component={Title} />
      <Route path='/text/' component={Text} />
    </Switch>
  );
};

export default Router;
