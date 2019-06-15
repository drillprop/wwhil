import React from 'react';
import styled from 'styled-components';
import { dark, light } from '../utils/colors';

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
  margin: 0;
  text-transform: uppercase;
`;
const StyledH1 = styled.h1`
  margin: 0;
`;

const Quote = () => {
  return (
    <Wrapper>
      <StyledHeader>
        <StyledH3>Przysłowie kazachskie</StyledH3>
        <StyledH1>
          " Ten, kto robi kocioł, może umieścić ucho tam, gdzie chce "
        </StyledH1>
      </StyledHeader>
    </Wrapper>
  );
};

export default Quote;
