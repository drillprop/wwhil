import styled from 'styled-components';
import { light } from '../utils/colors';

export const Wrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background-color: ${({ background = light }) => background};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
