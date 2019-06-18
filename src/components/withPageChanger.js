import React, { useContext } from 'react';
import { __RouterContext } from 'react-router-dom';

const withPageChanger = Component => props => {
  const context = useContext(__RouterContext);
  const handleOnWheel = e => {
    console.log(context);
  };
  return (
    <div onWheel={handleOnWheel}>
      <Component {...props} context={context} />;
    </div>
  );
};

export default withPageChanger;
