import React from 'react';
import { Wrapper } from '../elements/Wrapper';

const Text = ({ history }) => {
  const handleOnWheel = e => {
    if (e.deltaY < 0) {
      history.push('/title');
    }
  };
  return (
    <Wrapper onWheel={handleOnWheel}>
      <p>text</p>
    </Wrapper>
  );
};

export default Text;
