import { animated } from 'react-spring';
import styled from 'styled-components';
import { dark, light, middle } from '../../utils/colors';
import { sansSerif } from '../../utils/fonts';

export const StyledHeader = styled.header`
  color: ${light};
  grid-row: 3/6;
  grid-column: 2/5;
`;
export const StyledH3 = styled(animated.h3)`
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
export const HideDiv = styled(animated.div)`
  width: 100%;
  height: 50px;
  background-color: ${dark};
  top: -19px;
  position: relative;
`;
export const StyledH1 = styled(animated.h1)`
  margin: 0;
  font-size: 3em;
  font-weight: 400;
  color: ${light};
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
