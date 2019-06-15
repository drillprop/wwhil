import React, { useRef } from 'react';
import styled from 'styled-components';
import { dark, light, middle } from '../utils/colors';
import { sansSerif } from '../utils/fonts';
import { useSpring, useChain, animated } from 'react-spring';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background-color: ${dark};
  height: 100vh;
`;
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
  margin-bottom: 1em;
`;
const StyledH1 = styled(animated.h1)`
  margin: 0;
  font-size: 3em;
  font-weight: 400;
  font-style: italic;
`;

const Quote = () => {
  const h1ref = useRef();
  const propsH1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ref: h1ref
  });
  const h3ref = useRef();
  const propsH3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ref: h3ref
  });
  useChain([h1ref, h3ref], [0.4, 0.5]);
  return (
    <Wrapper>
      <StyledHeader>
        <StyledH3 style={propsH3}>Przysłowie kazachskie</StyledH3>
        <StyledH1 style={propsH1}>
          " Ten, kto robi kocioł, może umieścić ucho tam, gdzie chce "
        </StyledH1>
      </StyledHeader>
    </Wrapper>
  );
};

export default Quote;
