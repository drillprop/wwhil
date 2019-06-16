import React, { useRef } from 'react';
import styled from 'styled-components';
import { dark, light, middle } from '../utils/colors';
import { sansSerif } from '../utils/fonts';
import { useSpring, useChain, animated } from 'react-spring';
import { Wrapper } from '../elements/Wrapper';

const StyledHeader = styled.header`
  color: ${light};
  grid-row: 3/6;
  grid-column: 2/5;
`;
const StyledH3 = styled(animated.h3)`
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 3px;
  margin: 0;
  color: ${middle};
  font-family: ${sansSerif};
  text-transform: uppercase;
  text-align: right;
  margin-bottom: 1em;
`;
const HideDiv = styled(animated.div)`
  width: 100%;
  height: 50px;
  background-color: ${dark};
  top: -19px;
  position: relative;
`;
const StyledH1 = styled(animated.h1)`
  margin: 0;
  font-size: 3em;
  font-weight: 400;
  font-style: italic;
  animation: moveAnimation 25s linear infinite;
  @keyframes moveAnimation {
    0% {
      transform: translateX(-40px);
    }
    50% {
      transform: translateX(30px);
    }
    100% {
      transform: translateX(-40px);
    }
  }
`;

const Quote = () => {
  const h1ref = useRef();
  const propsH1 = useSpring({
    config: {
      duration: 2000
    },
    from: { transform: 'translateX(-40px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    ref: h1ref
  });
  const h3ref = useRef();
  const propsH3 = useSpring({
    from: { opacity: 1, transform: 'translateY(35px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    ref: h3ref
  });

  useChain([h1ref, h3ref], [0.4, 1]);
  return (
    <Wrapper background={dark}>
      <StyledHeader>
        <StyledH1 style={propsH1}>
          " Ten, kto robi kocioł, może umieścić ucho tam, gdzie chce "
        </StyledH1>
        <StyledH3 style={propsH3}>Przysłowie kazachskie</StyledH3>
        <HideDiv />
      </StyledHeader>
    </Wrapper>
  );
};

export default Quote;
