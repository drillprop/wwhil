import React, { useRef } from 'react';
import { useChain, useSpring } from 'react-spring';
import { Wrapper } from '../../elements/Wrapper';
import { dark } from '../../utils/colors';
import { HideDiv, StyledH1, StyledH3, StyledHeader } from './styles';

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
