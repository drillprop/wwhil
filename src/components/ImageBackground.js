import React from 'react';
import styled from 'styled-components';

const White = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: white;
  opacity: 0.66;
`;
const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url('./src/assets/img/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 30%;
`;

const ImageBackground = () => {
  return (
    <>
      <Background />
      <White />
    </>
  );
};

export default ImageBackground;
