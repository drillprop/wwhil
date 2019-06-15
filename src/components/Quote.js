import React from 'react';
import styled from 'styled-components';
import { dark, light, middle } from '../utils/colors';
import { sansSerif } from '../utils/fonts';
import { useSpring, useTrail, animated } from 'react-spring';

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
const StyledH3 = styled.h3`
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
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });
  return (
    <Wrapper>
      <StyledHeader>
        <StyledH3>Przysłowie kazachskie</StyledH3>
        <StyledH1 style={props}>
          " Ten, kto robi kocioł, może umieścić ucho tam, gdzie chce "
        </StyledH1>
      </StyledHeader>
    </Wrapper>
  );
};

export default Quote;
