import React from 'react';
import { Wrapper } from '../elements/Wrapper';
import styled from 'styled-components';
import { serif, sansSerif } from '../utils/fonts';
import { dark, light } from '../utils/colors';
import ImageBackground from './ImageBackground';
import { useSpring, useTrail, animated } from 'react-spring';

const StyledHeader = styled.header`
  grid-row: 3/4;
  grid-column: 3;
`;
const StyledTitle = styled(animated.h1)`
  position: relative;
  font-family: ${serif};
  color: ${dark};
  margin: 0;
  font-style: italic;
  font-size: 25rem;
  text-shadow: 10px 5px ${light};
`;
const SubTitle = styled.h3`
  position: relative;
  display: inline;
  top: -80px;
  left: 600px;
  font-weight: 400;
  font-size: 0.9rem;
  letter-spacing: 3px;
  margin: 0;
  color: ${dark};
  font-family: ${sansSerif};
`;

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
        <StyledTitle style={props}>kafli</StyledTitle>
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
