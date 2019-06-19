import React from 'react';
import { animated, useSpring, useTrail } from 'react-spring';
import { Wrapper } from '../../elements/Wrapper';
import ImageBackground from './ImageBackground';
import { StyledHeader, MainTitle, SubTitle } from './styles';

const Title = () => {
  const props = useSpring({
    from: {
      transform: 'scale(5) translate(-500px, 0) rotate(-90deg) skewX(60deg)'
    },
    to: {
      transform: 'scale(1) translate(0, 0) rotate(0) skewX(0)'
    },
    config: {
      mass: 2,
      tension: 90,
      friction: 20
    }
  });
  let wroteBy = 'Literat, Prozaik, Pisarz Wrocław, 3/4 VIII 2013';
  let words = wroteBy.split(' ');
  const trail = useTrail(words.length, {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 700
  });
  return (
    <Wrapper>
      <ImageBackground />
      <StyledHeader>
        <MainTitle style={props}>kafli</MainTitle>
        <SubTitle>
          {trail.map((style, index) => (
            <animated.span key={words[index]} style={style}>
              {words[index] + ' '}
            </animated.span>
          ))}
        </SubTitle>
      </StyledHeader>
    </Wrapper>
  );
};

export default Title;
