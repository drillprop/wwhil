import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import withPageChanger from '../utils/withPageChanger';
import Quote from './Quote/Quote';
import Text from './Text/Text';
import Title from './Title/Title';

const Router = ({ context }) => {
  const { location } = context;
  const animation = {
    from: { position: 'absolute', opacity: 0 },
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

export default withPageChanger(Router);
