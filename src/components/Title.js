import React from 'react';
import { Wrapper } from '../elements/Wrapper';
import styled from 'styled-components';
import { serif, sansSerif } from '../utils/fonts';
import { dark, middle } from '../utils/colors';

const StyledHeader = styled.header`
  grid-row: 1;
  grid-column: 1;
`;
const StyledTitle = styled.h1`
  position: relative;
  font-family: ${serif};
  color: ${dark};
  margin: 0;
  font-style: italic;
  font-size: 25rem;
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
  return (
    <Wrapper>
      <StyledHeader>
        <StyledTitle>kafli</StyledTitle>
        <SubTitle>Literat, Prozaik, Pisarz Wrocław, 3/4 VIII 2013</SubTitle>
      </StyledHeader>
    </Wrapper>
  );
};

export default Title;
