import React, { useContext, useEffect } from 'react';
import { __RouterContext } from 'react-router-dom';
import debounce from 'lodash.debounce';

const withPageChanger = Component => props => {
  const paths = ['', 'title', 'text'];

  const context = useContext(__RouterContext);

  const { history, location } = context;

  const handleOnWheel = e => {
    const currentPath = location.pathname.substring(1);
    const index = paths.indexOf(currentPath);
    const changePath = debounce(delta => {
      if (delta > 0) {
        history.push(`/${paths[index + 1] || paths[paths.length - 1]}`);
      } else {
        history.push(`/${paths[index - 1] || paths[0]}`);
      }
    }, 250);
    changePath(e.deltaY);
  };

  return (
    <div onWheel={handleOnWheel}>
      <Component {...props} context={context} />
    </div>
  );
};

export default withPageChanger;
