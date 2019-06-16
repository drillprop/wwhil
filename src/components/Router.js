import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import Quote from './Quote';
import Title from './Title';
import Text from './Text';
import { useTransition, animated } from 'react-spring';

const Router = () => {
  const { location } = useContext(__RouterContext);
  const animation = {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  };
  const transitions = useTransition(
    location,
    location => location.pathname,
    animation
  );
  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div style={props} key={key}>
          <Switch location={item}>
            <Route path='/' exact component={Quote} />
            <Route path='/title' component={Title} />
            <Route path='/text' component={Text} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default Router;
