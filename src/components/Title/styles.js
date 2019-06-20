import { animated } from 'react-spring';
import styled from 'styled-components';
import { dark, light } from '../../utils/colors';
import { sansSerif, serif } from '../../utils/fonts';

export const White = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: white;
  opacity: 0.66;
`;
export const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url('./src/assets/img/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 30%;
`;

export const StyledHeader = styled.header`
  grid-row: 3/4;
  grid-column: 3;
`;
export const UpperTitle = styled(animated.h1)`
  position: relative;
  font-family: ${sansSerif};
  color: ${dark};
  top: 80px;
  left: 20px;
  font-weight: 700;
  opacity: 0.8;
  text-transform: uppercase;
  margin: 0;
  font-size: 2rem;
  text-shadow: 2px 3px ${light};
`;
export const MainTitle = styled(animated.h1)`
  position: relative;
  font-family: ${serif};
  color: ${dark};
  margin: 0;
  font-style: italic;
  font-size: 15rem;
  text-shadow: 10px 5px ${light};
`;
export const SubTitle = styled.h3`
  position: relative;
  display: inline;
  top: -30px;
  left: 400px;
  font-weight: 400;
  font-size: 0.9rem;
  letter-spacing: 3px;
  margin: 0;
  color: ${dark};
  font-family: ${sansSerif};
`;
